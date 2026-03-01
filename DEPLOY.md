# SolarDoctor v2 — Deployment Guide

## Prerequisites
- Node.js 18+ installed
- Git access to ForestGreen/solardoctor repo
- Vercel account (team: rs-projects-bb94e9cb)
- Supabase project (vnexjqzdunijnfsgptyo)

---

## Step 1: Run the Supabase Migration

1. Go to https://supabase.com/dashboard/project/vnexjqzdunijnfsgptyo/sql/new
2. Paste the contents of `supabase/migration.sql`
3. Click "Run"
4. This adds new columns to `solar_systems` and creates `expected_production`, `monthly_production`, and `alert_history` tables with proper RLS policies.

---

## Step 2: Push Code to GitHub

```bash
cd solardoctor-v2
git init
git remote add origin https://github.com/ForestGreen/solardoctor-v2.git
git add .
git commit -m "SolarDoctor v2: Next.js + health score engine"
git push -u origin main
```

Or push to the existing `solardoctor` repo on a new branch:
```bash
git checkout -b v2
git push -u origin v2
```

---

## Step 3: Deploy to Vercel

1. Go to https://vercel.com/rs-projects-bb94e9cb
2. Click "Add New" → "Project"
3. Import the GitHub repo
4. Framework: **Next.js** (auto-detected)
5. Add these environment variables:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://vnexjqzdunijnfsgptyo.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | *(from .env.local)* |
| `SUPABASE_SERVICE_ROLE_KEY` | *(from .env.local)* |
| `NREL_API_KEY` | `DEMO_KEY` (or get a free key at developer.nrel.gov) |
| `RESEND_API_KEY` | *(from resend.com, for email alerts)* |
| `CRON_SECRET` | *(generate a random string for cron auth)* |

6. Click "Deploy"

---

## Step 4: Configure Custom Domain

1. In Vercel project settings → Domains
2. Add `getsolardoctor.com`
3. Update DNS records as instructed by Vercel

---

## Step 5: Get a Real NREL API Key (Optional but Recommended)

The `DEMO_KEY` works but has rate limits (30 requests/hour).
1. Go to https://developer.nrel.gov/signup/
2. Sign up (free)
3. Replace `DEMO_KEY` in Vercel env vars with your new key

---

## Step 6: Set Up Resend for Email Alerts (Optional)

1. Go to https://resend.com and create an account
2. Add and verify `getsolardoctor.com` domain
3. Get your API key
4. Add it to Vercel env vars as `RESEND_API_KEY`

---

## Architecture Overview

```
Landing Page (/) → Auth (/auth) → Dashboard (/dashboard)
                                       ↓
                              Connect System (/dashboard/connect)
                                       ↓
                              Health Score API (/api/health-score)
                                  ↓            ↓
                           SolarEdge API    PVWatts API
                          (actual kWh)    (expected kWh)
                                  ↓            ↓
                              Health Score = actual/expected × 100
```

- **SolarEdge API**: Fetches real production data (monthly kWh)
- **NREL PVWatts API**: Estimates expected production based on system size + location
- **Health Score**: Simple ratio — actual ÷ expected × 100
  - 90-110%: Healthy (green)
  - 75-89%: Underperforming (yellow)
  - 50-74%: Problem (orange)
  - <50%: Critical (red)
  - >110%: Overperforming (blue)

---

## Monthly Alert Cron

The `vercel.json` configures a monthly cron job that hits `/api/alerts/check` on the 1st of each month at 9am UTC. This checks all connected systems and sends email alerts for any that are underperforming.

To test manually:
```bash
curl -X POST https://getsolardoctor.com/api/alerts/check \
  -H "Authorization: Bearer YOUR_CRON_SECRET"
```
