import styles from "./IntroductionBlock.module.css";
import PreviewImage from "@/../public/bobr1.png";
import Image from "next/image";
import { IntroductionBlockProps } from "./IntroductionBlock.types";
import { getTranslations } from "next-intl/server";
import { mainPageContent } from "../../lib/constants/constants";
import { ButtonIntoView } from "../../shared/ButtonIntoView";

export async function IntroductionBlock({
	title,
	aboutCompanyBlock,
	children,
}: IntroductionBlockProps) {
	const t = await getTranslations("MainPage");
	return (
		<section className={styles.previewBlock}>
			<Image
				src={PreviewImage}
				alt="filler image"
				fill
				className={styles.previewBlock__image}
				priority
			/>
			<h1 className={styles.previewBlock__title}>{t(title)}</h1>
			<h2 className={styles.previewBlock__subtitle}>
				{t(aboutCompanyBlock.subtitle)}
			</h2>
			<ButtonIntoView
				href={mainPageContent.aboutUs.discussProjectBtn.anchor}
				text={mainPageContent.aboutUs.discussProjectBtn.text}
				className={styles.previewBlock__button}
			/>
			<div className={styles.cards__container}>{children}</div>

			<div className={styles.about_company}>
				<h3 className={styles.about_company_title}>
					{t(aboutCompanyBlock.title)}
				</h3>
				<p className={styles.about_company_text}>{t(aboutCompanyBlock.text)}</p>
			</div>
		</section>
	);
}
