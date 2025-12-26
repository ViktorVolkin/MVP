import styles from "./IntroductionBlock.module.css"
import { PreviewCard } from "../../shared/PreviewCard"
import PreviewImage from "@/../public/bobr1.jpg"
import Image from "next/image"
import { IntroductionBlockProps } from "./IntroductionBlock.types"
export async function IntroductionBlock({
	title,
	previewCards,
	aboutCompanyBlock,
}: IntroductionBlockProps) {
	return (
		<div className={styles.previewBlock}>
			<Image
				src={PreviewImage}
				alt="filler image"
				fill
				className={styles.previewBlock__image}
			></Image>
			<h1 className={styles.previewBlock__title}>{title}</h1>
			<div className={styles.cards__container}>
				{previewCards.map((item) => (
					<PreviewCard
						{...item}
						key={`${item.title}-${item.subtitle.casualText}`}
					/>
				))}
			</div>
			<div className={styles.about_company}>
				<h3 className={styles.about_company_title}>
					{aboutCompanyBlock.title}
				</h3>
				<p className={styles.about_company_text}>
					{aboutCompanyBlock.text}
				</p>
			</div>
		</div>
	)
}
