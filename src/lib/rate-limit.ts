// Simple in-memory rate limiter for serverless functions
// Each Vercel function instance has its own cache, so this provides
// per-instance protection. For distributed rate limiting, use Upstash Redis.

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const cache = new Map<string, RateLimitEntry>();

// Clean up stale entries periodically
const CLEANUP_INTERVAL = 60_000; // 1 minute
let lastCleanup = Date.now();

function cleanup() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;
  cache.forEach((entry, key) => {
    if (entry.resetAt < now) cache.delete(key);
  });
}

export function rateLimit(
  key: string,
  { maxRequests = 5, windowMs = 60_000 }: { maxRequests?: number; windowMs?: number } = {}
): { success: boolean; remaining: number; resetAt: number } {
  cleanup();

  const now = Date.now();
  const entry = cache.get(key);

  if (!entry || entry.resetAt < now) {
    cache.set(key, { count: 1, resetAt: now + windowMs });
    return { success: true, remaining: maxRequests - 1, resetAt: now + windowMs };
  }

  entry.count++;

  if (entry.count > maxRequests) {
    return { success: false, remaining: 0, resetAt: entry.resetAt };
  }

  return { success: true, remaining: maxRequests - entry.count, resetAt: entry.resetAt };
}
