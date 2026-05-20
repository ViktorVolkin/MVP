export const ServiceMarketingPageContent = {
	intro: {
		title: "ServiceMarketingPage.intro.title",
		text: "ServiceMarketingPage.intro.description",
	},
	steps: {
		title: "ServiceMarketingPage.steps.title",
		steps: [
			{
				title: "ServiceMarketingPage.steps.items.0.title",
				text: ["ServiceMarketingPage.steps.items.0.text"],
			},
			{
				title: "ServiceMarketingPage.steps.items.1.title",
				text: ["ServiceMarketingPage.steps.items.1.text"],
			},
			{
				title: "ServiceMarketingPage.steps.items.2.title",
				text: ["ServiceMarketingPage.steps.items.2.text"],
			},
			{
				title: "ServiceMarketingPage.steps.items.3.title",
				text: ["ServiceMarketingPage.steps.items.3.text"],
			},
			{
				title: "ServiceMarketingPage.steps.items.4.title",
				text: ["ServiceMarketingPage.steps.items.4.text"],
			},
			{
				title: "ServiceMarketingPage.steps.items.5.title",
				text: ["ServiceMarketingPage.steps.items.5.text"],
			},
		],
	},

	tariffs: {
		title: "ServiceMarketingPage.tariffs.title",
		description: "ServiceMarketingPage.tariffs.description",
		cards: [
			{
				id: "base",
				tariffName: "ServiceMarketingPage.tariffs.items.base.name",
				price: {
					text: "ServiceMarketingPage.tariffs.items.base.price",
					color: "red",
				},
				previewText: "ServiceMarketingPage.tariffs.items.base.previewText",
				list: [
					{
						title: {
							title: "ServiceMarketingPage.tariffs.labels.forWhom",
							keywords: [] as string[],
						},
						text: {
							text: "ServiceMarketingPage.tariffs.items.base.forWhomText",
							keywords: [] as string[],
						},
					},
					{
						title: {
							title: "ServiceMarketingPage.tariffs.labels.budget",
							keywords: [] as string[],
						},
						text: {
							text: "ServiceMarketingPage.tariffs.items.base.budgetText",
							keywords: [] as string[],
						},
					},
					{
						title: {
							title: "ServiceMarketingPage.tariffs.labels.included",
							keywords: [] as string[],
						},
						listType: "ul" as const,
						items: [
							{
								text: "ServiceMarketingPage.tariffs.items.base.includedList",
								keywords: [] as string[],
							},
						],
					},
				],
			},
			{
				id: "standard",
				tariffName: "ServiceMarketingPage.tariffs.items.standard.name",
				price: {
					text: "ServiceMarketingPage.tariffs.items.standard.price",
					color: "blue",
				},
				previewText: "ServiceMarketingPage.tariffs.items.standard.previewText",
				list: [
					{
						title: {
							title: "ServiceMarketingPage.tariffs.labels.forWhom",
							keywords: [] as string[],
						},
						text: {
							text: "ServiceMarketingPage.tariffs.items.standard.forWhomText",
							keywords: [] as string[],
						},
					},
					{
						title: {
							title: "ServiceMarketingPage.tariffs.labels.budget",
							keywords: [] as string[],
						},
						text: {
							text: "ServiceMarketingPage.tariffs.items.standard.budgetText",
							keywords: [] as string[],
						},
					},
					{
						title: {
							title: "ServiceMarketingPage.tariffs.labels.included",
							keywords: [] as string[],
						},
						listType: "ul" as const,
						items: [
							{
								text: "ServiceMarketingPage.tariffs.items.standard.includedList",
								keywords: [] as string[],
							},
						],
					},
				],
			},
			{
				id: "premium",
				tariffName: "ServiceMarketingPage.tariffs.items.premium.name",
				price: {
					text: "ServiceMarketingPage.tariffs.items.premium.price",
					color: "purple",
				},
				previewText: "ServiceMarketingPage.tariffs.items.premium.previewText",
				list: [
					{
						title: {
							title: "ServiceMarketingPage.tariffs.labels.forWhom",
							keywords: [] as string[],
						},
						text: {
							text: "ServiceMarketingPage.tariffs.items.premium.forWhomText",
							keywords: [] as string[],
						},
					},
					{
						title: {
							title: "ServiceMarketingPage.tariffs.labels.budget",
							keywords: [] as string[],
						},
						text: {
							text: "ServiceMarketingPage.tariffs.items.premium.budgetText",
							keywords: [] as string[],
						},
					},
					{
						title: {
							title: "ServiceMarketingPage.tariffs.labels.included",
							keywords: [] as string[],
						},
						listType: "ul" as const,
						items: [
							{
								text: "ServiceMarketingPage.tariffs.items.premium.includedList",
								keywords: [] as string[],
							},
						],
					},
				],
			},
		],
	},
};
