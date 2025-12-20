import { PreviewCardProps } from "./PreviewCard.types"
import styles from "./PreviewCard.module.css"
import { Link } from "@/i18n/navigation"
export function PreviewCard({
	button,
	subtitle,
	text,
	title,
}: PreviewCardProps) {
	return (
		<div className={styles.card__wrapper}>
			<h4 className={styles.card__title}>
				<Link href={button.leadsTo}>{title}</Link>
			</h4>
			<h6 className={styles.card__subtitle}>
				{subtitle.casualText}{" "}
				<span className={styles.card__subtitle_important}>
					{subtitle.important}
				</span>
			</h6>
			<p className={styles.card__info}>{text}</p>
			<Link className={styles.card__button} href={button.leadsTo}>
				{button.text}
			</Link>
		</div>
	)
}
