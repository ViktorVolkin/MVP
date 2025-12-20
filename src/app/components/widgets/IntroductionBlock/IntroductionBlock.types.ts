import { PreviewCardProps } from "../../shared/PreviewCard/PreviewCard.types"

export interface IntroductionBlockProps {
	title: string
	previewCards: PreviewCardProps[]
	aboutCompanyBlock: {
		title: string
		text: string
	}
}
