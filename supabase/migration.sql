-- ═══════════════════════════════════════════════════════════
-- SolarDoctor v2 Database Migration
-- Run this in your Supabase SQL Editor
-- ═══════════════════════════════════════════════════════════

-- ─── 1. Add new columns to solar_systems table ───
-- These columns are auto-populated from SolarEdge API on first connection

ALTER TABLE solar_systems
ADD COLUMN IF NOT EXISTS system_capacity_kw NUMERIC,
ADD COLUMN IF NOT EXISTS latitude NUMERIC,
ADD COLUMN IF NOT EXISTS longitude NUMERIC,
ADD COLUMN IF NOT EXISTS zip_code TEXT,
ADD COLUMN IF NOT EXISTS city TEXT,
ADD COLUMN IF NOT EXISTS state TEXT,
ADD COLUMN IF NOT EXISTS install_date TEXT,
ADD COLUMN IF NOT EXISTS panel_manufacturer TEXT,
ADD COLUMN IF NOT EXISTS panel_model TEXT,
ADD COLUMN IF NOT EXISTS last_health_check TIMESTAMPTZ;

-- ─── 2. Expected Monthly Production (from PVWatts) ───
-- Cached PVWatts estimates to avoid repeated API calls

CREATE TABLE IF NOT EXISTS expected_production (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  solar_system_id UUID REFERENCES solar_systems(id) ON DELETE CASCADE,
  month INTEGER NOT NULL CHECK (month >= 1 AND month <= 12),
  expected_kwh NUMERIC NOT NULL,
  pvwatts_params JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(solar_system_id, month)
);

-- ─── 3. Monthly Production Records ───
-- Stores actual vs expected for historical tracking

CREATE TABLE IF NOT EXISTS monthly_production (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  solar_system_id UUID REFERENCES solar_systems(id) ON DELETE CASCADE,
  month INTEGER NOT NULL CHECK (month >= 1 AND month <= 12),
  year INTEGER NOT NULL,
  actual_kwh NUMERIC NOT NULL,
  expected_kwh NUMERIC,
  health_score NUMERIC,
  status TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(solar_system_id, month, year)
);

-- ─── 4. Alert History ───
-- Track all alerts sent to users

CREATE TABLE IF NOT EXISTS alert_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  solar_system_id UUID REFERENCES solar_systems(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  alert_type TEXT NOT NULL, -- 'offline', 'underperforming', 'critical'
  message TEXT NOT NULL,
  health_score NUMERIC,
  month INTEGER,
  year INTEGER,
  email_sent BOOLEAN DEFAULT FALSE,
  sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─── 5. Row Level Security ───

-- solar_systems: users can only see/edit their own
ALTER TABLE solar_systems ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own systems" ON solar_systems;
CREATE POLICY "Users can view own systems" ON solar_systems
  FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own systems" ON solar_systems;
CREATE POLICY "Users can insert own systems" ON solar_systems
  FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own systems" ON solar_systems;
CREATE POLICY "Users can update own systems" ON solar_systems
  FOR UPDATE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete own systems" ON solar_systems;
CREATE POLICY "Users can delete own systems" ON solar_systems
  FOR DELETE USING (auth.uid() = user_id);

-- expected_production: accessible via system ownership
ALTER TABLE expected_production ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can manage expected_production via system" ON expected_production;
CREATE POLICY "Users can manage expected_production via system" ON expected_production
  FOR ALL USING (
    solar_system_id IN (
      SELECT id FROM solar_systems WHERE user_id = auth.uid()
    )
  );

-- monthly_production: accessible via system ownership
ALTER TABLE monthly_production ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can manage monthly_production via system" ON monthly_production;
CREATE POLICY "Users can manage monthly_production via system" ON monthly_production
  FOR ALL USING (
    solar_system_id IN (
      SELECT id FROM solar_systems WHERE user_id = auth.uid()
    )
  );

-- alert_history: users can view their own alerts
ALTER TABLE alert_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own alerts" ON alert_history;
CREATE POLICY "Users can view own alerts" ON alert_history
  FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Service role can manage alerts" ON alert_history;
CREATE POLICY "Service role can manage alerts" ON alert_history
  FOR ALL USING (true)
  WITH CHECK (true);

-- ─── 6. Indexes ───

CREATE INDEX IF NOT EXISTS idx_solar_systems_user_id ON solar_systems(user_id);
CREATE INDEX IF NOT EXISTS idx_solar_systems_site_id ON solar_systems(site_id);
CREATE INDEX IF NOT EXISTS idx_monthly_production_system_period ON monthly_production(solar_system_id, year, month);
CREATE INDEX IF NOT EXISTS idx_alert_history_system ON alert_history(solar_system_id);
CREATE INDEX IF NOT EXISTS idx_alert_history_user ON alert_history(user_id);

-- ─── 7. Service role policy for health-score API updates ───
-- The API route uses the service role to update system metadata,
-- so we need a separate policy for that.

DROP POLICY IF EXISTS "Service role can update systems" ON solar_systems;
CREATE POLICY "Service role can update systems" ON solar_systems
  FOR UPDATE USING (true) WITH CHECK (true);
