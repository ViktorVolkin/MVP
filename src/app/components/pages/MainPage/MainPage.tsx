import { IntroductionBlock } from "../../widgets/IntroductionBlock"
import { ServicesBlock } from "../../widgets/ServicesBlock"
import { AboutUsBlock } from "../../widgets/AboutUsBlock"
import { StepsOfWork } from "../../widgets/StepsOfWork"
import { ConsultationBlock } from "../../widgets/ConsultationBlock"
import { mainPageContent } from "../../lib/constants/constants"
import { getTranslations } from "next-intl/server"

export async function MainPage() {
	const t = await getTranslations("MainPage")

	return (
		<>
			<IntroductionBlock
				aboutCompanyBlock={{
					text: t(
						mainPageContent.introduction.aboutCompanyBlock.text,
					),
					title: t(
						mainPageContent.introduction.aboutCompanyBlock.title,
					),
				}}
				previewCards={mainPageContent.introduction.previewCards.map(
					(item) => ({
						title: t(item.title),
						button: {
							text: t(item.button.text),
							leadsTo: item.button.leadsTo,
						},
						subtitle: {
							casualText: t(item.subtitle.casualText),
							important: t(item.subtitle.important),
						},
						text: t(item.text),
					}),
				)}
				title={t(mainPageContent.introduction.title)}
			/>
			<ServicesBlock
				title={t(mainPageContent.services.title)}
				titleKeywords={mainPageContent.services.titleKeywords.map((k) =>
					t(k),
				)}
				services={mainPageContent.services.services.map((service) => ({
					...service,
					title: t(service.title),
					text: t(service.text),
				}))}
			/>
			<AboutUsBlock
				title={{
					text: t(mainPageContent.aboutUs.title.text),
					keywords: mainPageContent.aboutUs.title.keywords.map((k) =>
						t(k),
					),
				}}
				items={mainPageContent.aboutUs.items.map((item) => ({
					title: t(item.title),
					text: t(item.text),
				}))}
				discussProjectBtn={{
					anchor: mainPageContent.aboutUs.discussProjectBtn.anchor,
					text: t(mainPageContent.aboutUs.discussProjectBtn.text),
				}}
			/>
			<StepsOfWork
				title={t(mainPageContent.stepsOfWork.title)}
				steps={mainPageContent.stepsOfWork.steps.map((step) => t(step))}
			/>
			<ConsultationBlock
				title={t(mainPageContent.consultationBlock.title)}
				keywords={mainPageContent.consultationBlock.keywords.map((k) =>
					t(k),
				)}
				keyPoints={mainPageContent.consultationBlock.keyPoints.map(
					(p) => t(p),
				)}
				id={mainPageContent.aboutUs.discussProjectBtn.anchor}
			/>
		</>
	)
}
