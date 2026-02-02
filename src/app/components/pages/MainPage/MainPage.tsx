import { IntroductionBlock } from "../../widgets/IntroductionBlock"
import { ServicesBlock } from "../../widgets/ServicesBlock"
import { AboutUsBlock } from "../../widgets/AboutUsBlock"
import { StepsOfWork } from "../../widgets/StepsOfWork"
import { ConsultationBlock } from "../../widgets/ConsultationBlock"
import { mainPageContent } from "../../lib/constants"

export function MainPage() {
	return (
		<>
			<IntroductionBlock
				aboutCompanyBlock={
					mainPageContent.introduction.aboutCompanyBlock
				}
				previewCards={mainPageContent.introduction.previewCards}
				title={mainPageContent.introduction.title}
			/>
			<ServicesBlock
				titleKeywords={mainPageContent.services.titleKeywords}
				services={mainPageContent.services.services}
				title={mainPageContent.services.title}
			/>
			<AboutUsBlock
				title={mainPageContent.aboutUs.title}
				items={mainPageContent.aboutUs.items}
				discussProjectBtn={mainPageContent.aboutUs.discussProjectBtn}
			/>
			<StepsOfWork
				title={mainPageContent.stepsOfWork.title}
				steps={mainPageContent.stepsOfWork.steps}
			/>
			<ConsultationBlock
				keyPoints={mainPageContent.consultationBlock.keyPoints}
				title={mainPageContent.consultationBlock.title}
				keywords={mainPageContent.consultationBlock.keywords}
				id={mainPageContent.aboutUs.discussProjectBtn.anchor}
			/>
		</>
	)
}
