import { getTranslations } from "next-intl/server"
export const translateBlock = async <T extends { text: string }>(
	block: T[],
) => {
	const t = await getTranslations()
	return block.map((item) => ({
		...item,
		text: t(item.text),
	}))
}
