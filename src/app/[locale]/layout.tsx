import { routing } from "@/i18n/routing"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { Manrope } from "next/font/google"
import "./globals.css"
import { getMessages, getTranslations } from "next-intl/server"
import { Footer } from "../components/widgets/Footer"
import { Header } from "../components/widgets/Header"
import styles from "./layout.module.css"
import {
	FOOTER__SOCIALS,
	NAVIGATION__BLOCKS,
	SERVICES,
} from "../components/lib/constants"
import { translateBlock } from "../components/lib/utils/translateBlock"
import { Organization, WithContext, CreativeWork } from "schema-dts"

const manrope = Manrope({
	subsets: ["cyrillic", "latin"],
	preload: true,
})

const siteUrl = process.env.PUBLIC_SITE_URL ?? ""

export async function generateMetadata() {
	const t = getTranslations()
	return {
		title: {
			template: `%s | WebLeadCraft`,
			default: `WebLeadCraft`,
		},
		description: "The page where your journey starts",
		icons: {
			icon: "/favicon.ico",
			shortcut: "/favicon.ico",
			apple: "/favicon.ico",
		},
		metadataBase: new URL(siteUrl),
		openGraph: {
			title: "WebLeadCraft",
			description: "Boost your leads, we offer marketing, sites...",
			siteName: "WebLeadCraft",
			images: [
				{
					url: "/view.jpg",
					width: 600,
					height: 800,
					alt: "Funny image.",
				},
			],
		},
		alternates: {
			canonical: "/",
			languages: {
				"en-US": "/en",
				"ru-RU": "/ru",
				"x-default": "/ru",
			},
		},
	}
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params
	const messages = await getMessages()
	const t = await getTranslations()

	// const organizationJsonLd: WithContext<Organization> = {
	// 	"@context": "https://schema.org",
	// 	"@type": "Organization",
	// 	name: "WebLeadCraft",
	// 	url: siteUrl,
	// 	logo: `${siteUrl}/favicon.ico`,
	// 	sameAs: [FOOTER__SOCIALS[0].link, "https://github.com"],
	// 	areaServed: "Worldwide",
	// 	contactPoint: {
	// 		"@type": "ContactPoint",
	// 		telephone: "+7-993-470-8112",
	// 		contactType: "customer service",
	// 		availableLanguage: ["Russian", "English"],
	// 	},
	// email: "",
	// keywords: '', особо не ловит нынче но почему бы пару слов не добавить ( в основном для яндекса гугл уже ушел от этого)
	// 	description: "dgS",
	// 	hasOfferCatalog: { "@type": "OfferCatalog" },
	// }

	return (
		<>
			<html lang={locale}>
				<body className={manrope.className}>
					{/* <script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(organizationJsonLd),
						}}
					/> */}
					<NextIntlClientProvider messages={messages}>
						<div className={styles.wrapper}>
							<Header
								listLinks={await translateBlock(
									NAVIGATION__BLOCKS.navigation,
								)}
								phoneButton={{
									phoneNumber: "+79934708112",
									makeCall: t("header.makeCall"),
								}}
								telegram={FOOTER__SOCIALS[0].link}
								email={"gleb__vinogradovv@gmail.com"}
								services={await translateBlock(SERVICES)}
							/>
							<main className={styles.main}>{children}</main>
							<Footer
								navigation={[
									{
										title: t("footer.navigation"),
										elements: await translateBlock(
											NAVIGATION__BLOCKS.navigation,
										),
									},
									{
										title: t("footer.aboutCompany"),
										elements: await translateBlock(
											NAVIGATION__BLOCKS.aboutUs,
										),
									},
								]}
								socials={FOOTER__SOCIALS}
							></Footer>
						</div>
					</NextIntlClientProvider>
				</body>
			</html>
		</>
	)
}
