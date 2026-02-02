import { ServiceStepsBlockProps } from "./ServiceStepsBlock.types"
import styles from "./ServiceStepsBlock.module.css"
import clsx from "clsx"
export function ServiceStepsBlock({
	steps,
	title,
	className,
}: ServiceStepsBlockProps) {
	return (
		<section className={clsx(styles.work_process, className)}>
			<h4 className={styles.title}>{title}</h4>
			<ul className={styles.steps_list}>
				{steps.map((item) => (
					<li className={styles.steps_list_title} key={item.title}>
						<h6 className={styles.list_title}>{item.title}</h6>
						<ul className={styles.steps}>
							{item.text.map((text) => (
								<li className={styles.step_text} key={text}>
									{text}
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</section>
	)
}
