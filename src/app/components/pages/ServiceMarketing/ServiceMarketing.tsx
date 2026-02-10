import { getTranslations } from "next-intl/server"
import { ServiceIntroBlock } from "../../widgets/ServiceIntroBlock"
import image from "@/../public/фон10.png"
import { ServiceStepsBlock } from "../../widgets/ServiceStepsBlock"
import styles from "./ServiceMarketing.module.css"
import { ConsultationBlock } from "../../widgets/ConsultationBlock"
import { mainPageContent } from "../../lib/constants/constants"
import { ServiceTariffBlock } from "../../widgets/ServiceTariffBlock"
import { ServiceMarketingPageContent } from "../../lib/constants/serviceMarketingPage"

export async function ServiceMarketing() {
	const t = await getTranslations("ServiceMarketingPage")

	const stepsData = t.raw("steps.items")
	const steps = Object.keys(stepsData).map((key) => ({
		title: t(`steps.items.${key}.title`),
		text: t.raw(`steps.items.${key}.text`),
	}))

	const tariffCards = ServiceMarketingPageContent.tariffs.cards.map(
		(card) => ({
			tariffName: t(card.tariffName.replace("ServiceMarketingPage.", "")),
			price: {
				text: t(card.price.text.replace("ServiceMarketingPage.", "")),
				color: card.price.color,
			},
			previewText: t(
				card.previewText.replace("ServiceMarketingPage.", ""),
			),
			list: card.list.map((row) => {
				const title = {
					title: t(row.titleKey.replace("ServiceMarketingPage.", "")),
				}

				if (row.itemsKey) {
					return {
						title,
						listType: row.listType as "ul" | "ol",
						items: t
							.raw(
								row.itemsKey.replace(
									"ServiceMarketingPage.",
									"",
								),
							)
							.map((item: string) => ({ text: item })),
					}
				}

				return {
					title,
					text: {
						text: t(
							row.textKey!.replace("ServiceMarketingPage.", ""),
						),
						keywords: t.raw(
							row.keywordsKey!.replace(
								"ServiceMarketingPage.",
								"",
							),
						),
					},
				}
			}),
		}),
	)

	return (
		<div className={styles.wrapper}>
			<ServiceIntroBlock
				title={t("intro.title")}
				text={t("intro.description")}
				image={image}
				className={styles.intro}
			/>

			<ServiceStepsBlock
				title={t("steps.title")}
				className={styles.steps}
				steps={steps}
			/>

			<ServiceTariffBlock
				title={t("tariffs.title")}
				description={t("tariffs.description")}
				cards={tariffCards}
			/>

			<ConsultationBlock
				keyPoints={mainPageContent.consultationBlock.keyPoints}
				title={mainPageContent.consultationBlock.title}
				keywords={mainPageContent.consultationBlock.keywords}
				id={mainPageContent.aboutUs.discussProjectBtn.anchor}
			/>
		</div>
	)
}
