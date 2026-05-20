import { getTranslations } from "next-intl/server";
import styles from "./StepsOfWork.module.css";
import { StepsOfWorkProps } from "./StepsOfWork.types";
export async function StepsOfWork({ steps, title }: StepsOfWorkProps) {
	const t = await getTranslations("MainPage");
	return (
		<section className={styles.steps__wrapper}>
			<h4 className={styles.steps__title}>{t(title)}</h4>
			<ul className={styles.steps__list}>
				{steps.map((item, index) => (
					<li
						className={styles.steps__list_item}
						key={index}>
						<div className={styles.atom}>{index + 1}</div>
						<p className={styles.list__item_text}>{t(item)}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
