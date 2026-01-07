import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
	reactCompiler: true,
	turbopack: {},
	images: {
		formats: ["image/avif", "image/webp"],
	},
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
