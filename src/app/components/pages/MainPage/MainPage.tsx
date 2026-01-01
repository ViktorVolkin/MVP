import { IntroductionBlock } from "../../widgets/IntroductionBlock"
import { ServicesBlock } from "../../widgets/ServicesBlock"
import { MainPageProps } from "./MainPage.types"
import styles from "./MainPage.module.css"
export function MainPage({ introduction, services }: MainPageProps) {
	return (
		<main className={styles.main}>
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
		</main>
	)
}
