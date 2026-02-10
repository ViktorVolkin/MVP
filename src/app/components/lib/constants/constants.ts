import TelegramIcon from "@/../public/telegram.svg"
import FacebookIcon from "@/../public/facebook.svg"
import InstagramIcon from "@/../public/instagram.svg"
import VkIcon from "@/../public/vk.svg"
import image1 from "@/../public/bobr1.jpg"
import image2 from "@/../public/bobr2.png"
import image3 from "@/../public/фон10.png"

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
export const SERVICES = [
	{ text: "header.servicesList.marketing", pageLink: "/service/marketing" },
	{ text: "header.servicesList.bots", pageLink: "/service/bots" },
	{
		text: "header.servicesList.businessProcesses",
		pageLink: "/service/business-processes",
	},
	{ text: "header.servicesList.sites", pageLink: "/service/sites" },
	{
		text: "header.servicesList.marketingStrategy",
		pageLink: "/service/marketing-strategy",
	},
]
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

export const mainPageContent = {
	introduction: {
		title: "introduction.title",
		previewCards: [
			{
				title: "introduction.previewCards.0.title",
				subtitle: {
					casualText:
						"introduction.previewCards.0.subtitle.casualText",
					important: "introduction.previewCards.0.subtitle.important",
				},
				text: "introduction.previewCards.0.text",
				button: {
					leadsTo: "/",
					text: "introduction.previewCards.0.button.text",
				},
			},
			{
				title: "introduction.previewCards.1.title",
				subtitle: {
					casualText:
						"introduction.previewCards.1.subtitle.casualText",
					important: "introduction.previewCards.1.subtitle.important",
				},
				text: "introduction.previewCards.1.text",
				button: {
					leadsTo: "/",
					text: "introduction.previewCards.1.button.text",
				},
			},
			{
				title: "introduction.previewCards.2.title",
				subtitle: {
					casualText:
						"introduction.previewCards.2.subtitle.casualText",
					important: "introduction.previewCards.2.subtitle.important",
				},
				text: "introduction.previewCards.2.text",
				button: {
					leadsTo: "/",
					text: "introduction.previewCards.2.button.text",
				},
			},
		],
		aboutCompanyBlock: {
			title: "introduction.aboutCompanyBlock.title",
			text: "introduction.aboutCompanyBlock.text",
		},
	},

	services: {
		title: "services.title",
		titleKeywords: [
			"services.titleKeywords.0",
			"services.titleKeywords.1",
			"services.titleKeywords.2",
		],
		services: [
			{
				title: "services.items.0.title",
				text: "services.items.0.text",
				image: image1,
			},
			{
				title: "services.items.1.title",
				text: "services.items.1.text",
				image: image2,
			},
			{
				title: "services.items.2.title",
				text: "services.items.2.text",
				image: image3,
			},
		],
	},

	aboutUs: {
		title: {
			text: "aboutUs.title.text",
			keywords: ["aboutUs.title.keywords.0"],
		},
		items: [
			{
				title: "aboutUs.items.0.title",
				text: "aboutUs.items.0.text",
			},
			{
				title: "aboutUs.items.1.title",
				text: "aboutUs.items.1.text",
			},
			{
				title: "aboutUs.items.2.title",
				text: "aboutUs.items.2.text",
			},
		],
		discussProjectBtn: {
			anchor: "discuss-project",
			text: "aboutUs.discussProjectBtn.text",
		},
	},

	stepsOfWork: {
		title: "stepsOfWork.title",
		steps: [
			"stepsOfWork.steps.0",
			"stepsOfWork.steps.1",
			"stepsOfWork.steps.2",
			"stepsOfWork.steps.3",
			"stepsOfWork.steps.4",
		],
	},

	consultationBlock: {
		title: "consultationBlock.title",
		keywords: [
			"consultationBlock.keywords.0",
			"consultationBlock.keywords.1",
		],
		keyPoints: [
			"consultationBlock.keyPoints.0",
			"consultationBlock.keyPoints.1",
			"consultationBlock.keyPoints.2",
			"consultationBlock.keyPoints.3",
		],
	},
}
