import { IntroductionBlock } from "../../widgets/IntroductionBlock"
import { ServicesBlock } from "../../widgets/ServicesBlock"
import { MainPageProps } from "./MainPage.types"
import { AboutUsBlock } from "../../widgets/AboutUsBlock"
import { StepsOfWork } from "../../widgets/StepsOfWork"
export function MainPage({
	introduction,
	services,
	AboutUs,
	stepsOfWork,
}: MainPageProps) {
	return (
		<>
			<IntroductionBlock
				aboutCompanyBlock={introduction.aboutCompanyBlock}
				previewCards={introduction.previewCards}
				title={introduction.title}
			/>
			<ServicesBlock
				titleKeywords={services.titleKeywords}
				services={services.services}
				title={services.title}
			/>
			<AboutUsBlock
				title={AboutUs.title}
				items={AboutUs.items}
				discussProjectBtn={AboutUs.discussProjectBtn}
			/>
			<StepsOfWork title={stepsOfWork.title} steps={stepsOfWork.steps} />
		</>
	)
}
