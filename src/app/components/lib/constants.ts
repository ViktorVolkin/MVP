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
		title: "Разработка и продвижение сайтов с гарантией результата",
		previewCards: [
			{
				title: "Разработка",
				subtitle: {
					casualText: "Качественный сайт для вас",
					important: "роста продаж",
				},
				text: "Разрабатываем сайты, которые решают бизнес-задачи. За 14 лет нами создано 2500+ проектов для компаний из 65 отраслей.Возвращаем деньги если нарушим сроки.",
				button: {
					leadsTo: "/",
					text: "Подробнее",
				},
			},
			{
				title: "Разработка",
				subtitle: {
					casualText: "Качественный сайт for",
					important: "роста продаж",
				},
				text: "Разрабатываем сайты, которые решают бизнес-задачи. За 14 лет нами создано 2500+ проектов для компаний из 65 отраслей.Возвращаем деньги если нарушим сроки.",
				button: {
					leadsTo: "/",
					text: "Подробнее",
				},
			},
			{
				title: "Разработка",
				subtitle: {
					casualText: "Качественный сайт fur",
					important: "роста продаж",
				},
				text: "Разрабатываем сайты, которые решают бизнес-задачи. За 14 лет нами создано 2500+ проектов для компаний из 65 отраслей.Возвращаем деньги если нарушим сроки.",
				button: {
					leadsTo: "/",
					text: "Подробнее",
				},
			},
		],
		aboutCompanyBlock: {
			title: "WebCanape — digital-агентство с понятными гарантиями",
			text: "В отличие от большинства студий мы даем прозрачные и понятные гарантии на свои услуги, которые мы фиксируем в договоре. Работа на результат и клиентский сервис — главные приоритеты WebCanape. Если вам нужен надежный партнер, который сможет оперативно и с гарантированным качеством закрывать все вопросы по интернет-маркетингу, то вы обратились по адресу.",
		},
	},

	services: {
		title: "Задачи, с которыми мы вам поможем",
		titleKeywords: ["мы", "вам", "поможем"],
		services: [
			{
				title: "Увеличить прибыль",
				text: "Проведём анализ текущего положения, выявим точки роста и выстроим стратегию привлечения лидов",
				image: image1,
			},
			{
				title: "Увеличить узнаваемость бренда",
				text: "Определим ваше положение на рынке и выстроим доверительные отношения с аудиторией",
				image: image2,
			},
			{
				title: "Повысить входящий поток клиентов",
				text: "Приведём ваших клиентов к покупке продукта инструментами маркетинга",
				image: image3,
			},
		],
	},

	aboutUs: {
		title: {
			text: "Baikal-target — привлекаем лиды в Perfomance формате",
			keywords: ["привлекаем лиды"],
		},
		items: [
			{ title: "6 лет", text: "на рынке" },
			{
				title: "600 млн+",
				text: "заработали наши клиенты с нами",
			},
			{
				title: "30 +",
				text: "запущенных проектов регулярно в работе",
			},
		],
		discussProjectBtn: {
			anchor: "discuss-project",
			text: "Обсудить проект.",
		},
	},

	stepsOfWork: {
		title: "Этапы работы",
		steps: [
			"Заполнение брифа - выявление целей и задач по проекту. Обсуждение формата работы, распределение ответственных по передаче информации и ответственных в команде",
			"Аудит и создание стратегии продвижения, календарный план продвижения исходя из целей. Разработка стратегии 5 дней",
			"Оформление площадок. Создание рабочего чата для коммуникации команды с клиентом. Ведение контента, работа по стратегии",
			"Запуск рекламы - таргет или закуп рекламы по медиаплану",
			"Отслеживание KPI, корректировка стратегии",
		],
	},

	consultationBlock: {
		title: "Оставьте заявку на бизнес консультацию",
		keywords: ["Оставьте", "заявку"],
		keyPoints: [
			"Длительность консультации 15-40 минут",
			"Покажем открытые результаты клиентов, статистику рекламных кабинетов, примеры сайтов и объявлений",
			"Расскажем про общую стратегию",
			"Запись консультации останется в подарок",
		],
	},
}
