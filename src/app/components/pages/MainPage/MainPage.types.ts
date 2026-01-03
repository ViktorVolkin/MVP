import { AboutUsBlockProps } from "../../widgets/AboutUsBlock/AboutUsBlock.types"
import { IntroductionBlockProps } from "../../widgets/IntroductionBlock/IntroductionBlock.types"
import { ServicesBlockProps } from "../../widgets/ServicesBlock/ServicesBlock.types"
import { StepsOfWorkProps } from "../../widgets/StepsOfWork/StepsOfWork.types"

export type MainPageProps = {
	introduction: IntroductionBlockProps
	services: ServicesBlockProps
	AboutUs: AboutUsBlockProps
	stepsOfWork: StepsOfWorkProps
}
