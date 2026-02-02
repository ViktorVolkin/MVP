import { getTranslations } from "next-intl/server"
import styles from "./ServiceIntroBlock.module.css"
import { ServiceIntroBlockProps } from "./ServiceIntroBlock.types"
import Image from "next/image"
import clsx from "clsx"
export async function ServiceIntroBlock({
	image,
	text,
	title,
	className,
}: ServiceIntroBlockProps) {
	const t = await getTranslations()
	return (
		<section className={clsx(styles.intro, className)}>
			<div className={styles.info}>
				<h4 className={styles.title}>{title}</h4>
				<p className={styles.text}>{text}</p>
			</div>
			{image && (
				<div className={styles.image__container}>
					<Image
						src={image}
						alt={t("alts.services.intro")}
						fill
					></Image>
				</div>
			)}
		</section>
	)
}
