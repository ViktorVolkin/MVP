import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

export const limiter = new Ratelimit({
	redis: Redis.fromEnv(),
	limiter: Ratelimit.slidingWindow(3, "10 m"),
})

export async function checkRateLimit(ip: string) {
	const { success } = await limiter.limit(ip)
	return success
}
