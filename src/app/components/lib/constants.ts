import { getTranslations } from "next-intl/server"
import TelegramIcon from "@/../public/telegram.svg"
import FacebookIcon from "@/../public/facebook.svg"
import InstagramIcon from "@/../public/instagram.svg"
import VkIcon from "@/../public/vk.svg"

export const NAVIGATION__BLOCKS: Record<
	string,
	{
		text: string
		leadsTo: string
	}[]
> = {
	navigation: [
		{
			text: "header.main",
			leadsTo: "/",
		},
		{
			text: "header.aboutUs",
			leadsTo: "/about-us",
		},
		{
			text: "header.services",
			leadsTo: "/services",
		},
		{
			text: "header.contacts",
			leadsTo: "/contacts",
		},
	],
	aboutUs: [
		{
			leadsTo: "/about",
			text: "footer.aboutUs",
		},
		{
			leadsTo: "/careers",
			text: "footer.careers",
		},
		{ leadsTo: "/blog", text: "footer.blog" },
		{
			leadsTo: "/contacts",
			text: "footer.contacts",
		},
	],
}
export const FOOTER__SOCIALS = [
	{
		icon: TelegramIcon,
		link: "https://t.me/your_channel",
	},
	{
		icon: FacebookIcon,
		link: "https://github.com/your_org",
	},
	{
		icon: InstagramIcon,
		link: "https://youtube.com/@your_channel",
	},
	{
		icon: VkIcon,
		link: "https://vk.com/your_page",
	},
]
export const translateBlock = async (
	block: { text: string; leadsTo: string }[]
) => {
	const t = await getTranslations()
	return block.map((item) => ({
		text: t(item.text),
		leadsTo: item.leadsTo,
	}))
}
