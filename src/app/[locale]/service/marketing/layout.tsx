import { getTranslations } from "next-intl/server"

const siteUrl = process.env.PUBLIC_SITE_URL ?? ""

export async function generateMetadata() {
	const t = await getTranslations("ServiceMarketingPage")

	return {
		description: t("metadata.description"),
		metadataBase: new URL(siteUrl),

		icons: {
			icon: "/favicon.ico",
		},
		openGraph: {
			title: t("metadata.title"),
			description: t("metadata.description"),
			siteName: "WebLeadCraft",
			images: [
				{
					url: "/view.jpg",
					width: 600,
					height: 800,
					alt: t("metadata.ogAlt"),
				},
			],
		},
		alternates: {
			canonical: "/service",
			languages: {
				"en-US": "/en/service",
				"ru-RU": "/ru/service",
				"x-default": "/ru/service",
			},
		},
	}
}

export default async function ServicesLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const t = await getTranslations()
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: t("header.services"),
		description: t("ServiceMarketingPage.metadata.description"),
		provider: {
			"@type": "Organization",
			name: "WebLeadCraft",
			url: siteUrl,
		},
		areaServed: "Worldwide",
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Web Development Services",
		},
	}
	return (
		<>
			{/* <script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/> */}
			{children}
		</>
	)
}
