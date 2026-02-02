import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/admin/",
		},
		sitemap: process.env.PUBLIC_SITE_URL,
	}
}
