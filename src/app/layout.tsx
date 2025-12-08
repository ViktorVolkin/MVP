import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { Roboto } from "next/font/google"
import "./globals.css"

const robot = Roboto({
	subsets: ["cyrillic", "latin"],
	preload: true,
})
const url = process.env.PUBLIC_SITE_URL
export const metadata: Metadata = {
	title: "WebLeadCraft",
	description: "The page where your journey starts",
	icons: {
		icon: "./favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/favicon.ico",
	},
	metadataBase:
		process.env.ENV_MODE === "DEVELOPMENT" ? url : "http://localhost:3000",
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
				<NextIntlClientProvider>{children}</NextIntlClientProvider>
			</body>
		</html>
	)
}
