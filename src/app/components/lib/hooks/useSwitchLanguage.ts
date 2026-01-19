import { LocalesTypes } from "@/i18n/routing"
import { usePathname, useRouter } from "@/i18n/navigation"

export const useSwitchLanguage = () => {
	const router = useRouter()
	const pathname = usePathname()

	const switchLanguage = (changeTo: LocalesTypes) => {
		router.replace(pathname, { locale: changeTo, scroll: false })
	}

	return switchLanguage
}
