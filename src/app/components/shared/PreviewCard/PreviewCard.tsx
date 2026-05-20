import { PreviewCardProps } from "./PreviewCard.types";
import styles from "./PreviewCard.module.css";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
export async function PreviewCard({
	button,
	subtitle,
	text,
	title,
}: PreviewCardProps) {
	const t = await getTranslations("MainPage");
	return (
		<div className={styles.card__wrapper}>
			<h4 className={styles.card__title}>
				<Link href={button.leadsTo}>{t(title)}</Link>
			</h4>
			<h6 className={styles.card__subtitle}>
				{t(subtitle.casualText)}{" "}
				<span className={styles.card__subtitle_important}>
					{t(subtitle.important)}
				</span>
			</h6>
			<p className={styles.card__info}>{t(text)}</p>
			<Link
				className={styles.card__button}
				href={button.leadsTo}>
				{t(button.text)}
			</Link>
		</div>
	);
}
