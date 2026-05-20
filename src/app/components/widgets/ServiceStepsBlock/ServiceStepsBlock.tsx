import { ServiceStepsBlockProps } from "./ServiceStepsBlock.types";
import styles from "./ServiceStepsBlock.module.css";
import clsx from "clsx";
import { getMessages, getTranslations } from "next-intl/server";
import { resolveTranslationLines } from "../../lib/utils/translationHelpers";

export async function ServiceStepsBlock({
	steps,
	title,
	className,
}: ServiceStepsBlockProps) {
	const t = await getTranslations();
	const messages = await getMessages();
	return (
		<section className={clsx(styles.work_process, className)}>
			<h4 className={styles.title}>{t(title)}</h4>
			<ul className={styles.steps_list}>
				{steps.map((item) => (
					<li
						className={styles.steps_list_title}
						key={item.title}>
						<h6 className={styles.list_title}>{t(item.title)}</h6>
						<ul className={styles.steps}>
							{item.text.flatMap((text) =>
								resolveTranslationLines(messages, text).map((line) => (
									<li
										className={styles.step_text}
										key={`${text}-${line}`}>
										{line}
									</li>
								)),
							)}
						</ul>
					</li>
				))}
			</ul>
		</section>
	);
}
