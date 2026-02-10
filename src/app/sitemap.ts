import { MetadataRoute } from "next"
import { SERVICES } from "./components/lib/constants/constants"

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.PUBLIC_SITE_URL || "https://your-site.com"
	const locales = ["ru", "en"]

	// Собираем пути сервисов, гарантируя наличие начального слеша
	const servicePages = SERVICES.map((item) => {
		const link = item.pageLink
		return link.startsWith("/") ? link : `/${link}`
	})

	const pages = ["", "/services", ...servicePages]
	const sitemapEntries: MetadataRoute.Sitemap = []

	pages.forEach((page) => {
		locales.forEach((locale) => {
			const pagePath =
				page === "" ? "" : page.startsWith("/") ? page : `/${page}`

			sitemapEntries.push({
				url: `${baseUrl}/${locale}${pagePath}`,
				changeFrequency: "monthly" as const,
				priority: page === "" ? 1 : 0.8,
				alternates: {
					languages: {
						ru: `${baseUrl}/ru${pagePath}`,
						en: `${baseUrl}/en${pagePath}`,
					},
				},
			})
		})
	})

	return sitemapEntries
}
