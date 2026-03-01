-- Create the email_subscriptions table for weekly digest subscribers
-- Run this in Supabase SQL editor: https://supabase.com/dashboard/project/vnexjqzdunijnfsgptyo/sql

CREATE TABLE IF NOT EXISTS email_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  site_id TEXT NOT NULL,
  api_key TEXT NOT NULL,
  subscribed BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  last_digest_sent_at TIMESTAMPTZ,
  UNIQUE(email, site_id)
);

-- Create index for querying active subscriptions
CREATE INDEX IF NOT EXISTS idx_email_subscriptions_active
  ON email_subscriptions (subscribed)
  WHERE subscribed = true;

-- Create index for email lookups
CREATE INDEX IF NOT EXISTS idx_email_subscriptions_email
  ON email_subscriptions (email);

-- Enable Row Level Security
ALTER TABLE email_subscriptions ENABLE ROW LEVEL SECURITY;

-- Service role can do anything (used by our API)
CREATE POLICY "Service role full access"
  ON email_subscriptions
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Anon role can insert (for public subscribe endpoint)
CREATE POLICY "Anon can insert subscriptions"
  ON email_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);
