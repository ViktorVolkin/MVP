import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
	locales: ["en", "ru"],
	defaultLocale: "ru",
})

export type LocalesTypes = (typeof routing.locales)[number]
