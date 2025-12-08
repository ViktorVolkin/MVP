import { routing } from "@/i18n/routing"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { Roboto } from "next/font/google"
import "../globals.css"
import { getMessages } from "next-intl/server"

const robot = Roboto({
	subsets: ["cyrillic", "latin"],
	preload: true,
})
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export const metadata: Metadata = {
	title: "WebLeadCraft",
	description: "The page where your journey starts",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/favicon.ico",
	},
	metadataBase: new URL(siteUrl),
	openGraph: {
		title: "WebLeadCraft",
		description: "Boost your leads, we offer marketing,sites...",
		images: [
			{
				url: "/marketing_fun_image.jpg",
				width: 1500,
				height: 1000,
				alt: "Funny image.",
			},
		],
	},
}
const messages = await getMessages()

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: string }>
}>) {
	const { locale } = await params
	return (
		<html lang={locale}>
			<body className={robot.className}>
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
