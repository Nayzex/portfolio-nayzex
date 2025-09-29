import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Simple in-memory rate limiting for development
class InMemoryRateLimit {
  private requests: Map<string, number[]> = new Map();
  
  async limit(identifier: string) {
    const now = Date.now();
    const windowStart = now - 60000; // 1 minute window
    
    // Get existing requests for this identifier
    const existingRequests = this.requests.get(identifier) || [];
    
    // Filter out requests outside the window
    const recentRequests = existingRequests.filter(timestamp => timestamp > windowStart);
    
    // Check if limit exceeded (5 requests per minute)
    if (recentRequests.length >= 5) {
      return { success: false };
    }
    
    // Add current request
    recentRequests.push(now);
    this.requests.set(identifier, recentRequests);
    
    return { success: true };
  }
}

// Production rate limiting with Upstash Redis (if available)
let rateLimit: Ratelimit | InMemoryRateLimit;

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  // Production: Use Upstash Redis
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  rateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, '1 m'), // 5 requests per minute
    analytics: true,
  });
} else {
  // Development: Use in-memory rate limiting
  rateLimit = new InMemoryRateLimit();
}

export { rateLimit };
