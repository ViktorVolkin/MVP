import { IntroductionBlock } from "../../widgets/IntroductionBlock"
import { MainPageProps } from "./MainPage.types"
export function MainPage({
	aboutCompanyBlock,
	previewCards,
	title,
}: MainPageProps) {
	return (
		<IntroductionBlock
			aboutCompanyBlock={aboutCompanyBlock}
			previewCards={previewCards}
			title={title}
		/>
	)
}
