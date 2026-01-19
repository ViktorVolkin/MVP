"use server"
import { z } from "zod"
import { headers } from "next/headers"
import { checkRateLimit } from "./ratelimit"

const consultationFormSchema = z.object({
	name: z.string().min(2),
	phone: z.e164(),
	preferredType: z.string().optional(),
})

export async function sendMessageToTelegram(data: unknown) {
	const head = await headers()
	const ip = head.get("x-forwarded-for") ?? "127.0.0.1"
	const isAllowed = await checkRateLimit(ip)
	if (!isAllowed) {
		return {
			success: false,
			error: "Too many requests. Try again in 10 minutes.",
		}
	}
	const validatedData = consultationFormSchema.parse(data)
	const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
	const CHAT_ID = process.env.TELEGRAM_CHAT_ID
	if (!BOT_TOKEN || !CHAT_ID) {
		return {
			success: false,
			error: "Telegram configuration is missing",
		}
	}

	try {
		const messageText = `
📋 New Consultation Request

👤 Name: ${validatedData.name.trim() || "Not provided"}
📞 Phone: ${validatedData.phone?.trim() || "Not provided"}
📝 Preferred contact: ${validatedData.preferredType?.trim() || "Not specified"}
        `.trim()
		const response = await fetch(
			`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					chat_id: CHAT_ID,
					text: messageText,
				}),
			}
		)
		if (!response.ok) {
			const errorText = await response.text()
			console.error("Telegram API error:", errorText)
			return {
				success: false,
				error: "Failed to send notification",
			}
		}

		return { success: true }
	} catch (error) {
		console.error("Network error:", error)
		return {
			success: false,
			error: "Network error occurred",
		}
	}
}
