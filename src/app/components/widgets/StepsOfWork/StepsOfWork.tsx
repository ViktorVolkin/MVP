import styles from "./StepsOfWork.module.css"
import { StepsOfWorkProps } from "./StepsOfWork.types"
export function StepsOfWork({ steps, title }: StepsOfWorkProps) {
	return (
		<section className={styles.steps__wrapper}>
			<h4 className={styles.steps__title}>{title}</h4>
			<ul className={styles.steps__list}>
				{steps.map((item, index) => (
					<li className={styles.steps__list_item} key={index}>
						<div className={styles.atom}>{index + 1}</div>
						<p className={styles.list__item_text}>{item}</p>
					</li>
				))}
			</ul>
		</section>
	)
}
