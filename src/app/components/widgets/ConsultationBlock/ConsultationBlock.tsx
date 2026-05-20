import { ConsultationBlockProps } from "./ConsultationBlock.types";
import Highlighter from "react-highlight-words";
import styles from "./ConsultationBlock.module.css";
import clsx from "clsx";
import { getTranslations } from "next-intl/server";
export async function ConsultationBlock({
	keyPoints,
	title,
	keywords,
	id,
	children,
}: ConsultationBlockProps) {
	const t = await getTranslations("MainPage");
	return (
		<section
			className={clsx(styles.consultationblock)}
			id={id}>
			<div className={styles.content__container}>
				<div className={styles.consultationblock__info}>
					<h4 className={styles.title}>
						<Highlighter
							searchWords={keywords.map((k) => t(k))}
							textToHighlight={t(title)}
							autoEscape
							highlightClassName={styles.highlight}
							caseSensitive={false}
						/>
					</h4>
					<ul className={styles.list}>
						{keyPoints.map((item, idx) => (
							<li
								key={idx}
								className={styles.list_item}>
								{t(item)}
							</li>
						))}
					</ul>
				</div>
				{children}
			</div>
		</section>
	);
}
