import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { Roboto } from "next/font/google"
import "../globals.css"

const robot = Roboto({
	subsets: ["cyrillic", "latin"],
	preload: true,
})

export const metadata: Metadata = {
	title: "JetLead",
	description: "The page where your journey starts",
	metadataBase: "",
	openGraph: {
		title: "JetLead",
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
