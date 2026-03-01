-- Create health_reports table for shareable report URLs
CREATE TABLE IF NOT EXISTS health_reports (
  id TEXT PRIMARY KEY,
  system_name TEXT NOT NULL DEFAULT 'Solar System',
  system_capacity_kw NUMERIC DEFAULT 0,
  location TEXT DEFAULT '',
  overall_score NUMERIC NOT NULL,
  overall_status TEXT NOT NULL,
  estimated_lost_kwh NUMERIC DEFAULT 0,
  estimated_lost_dollars NUMERIC DEFAULT 0,
  current_power_w NUMERIC DEFAULT 0,
  lifetime_kwh NUMERIC DEFAULT 0,
  recent_months JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Index for fast lookups by ID
CREATE INDEX IF NOT EXISTS idx_health_reports_id ON health_reports(id);

-- Index for cleanup of old reports (auto-expire after 90 days)
CREATE INDEX IF NOT EXISTS idx_health_reports_created_at ON health_reports(created_at);

-- Enable RLS
ALTER TABLE health_reports ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public health check creates reports)
CREATE POLICY "Allow anonymous inserts" ON health_reports
  FOR INSERT
  WITH CHECK (true);

-- Allow anyone to read reports (they're meant to be shared)
CREATE POLICY "Allow public reads" ON health_reports
  FOR SELECT
  USING (true);
