import { ConsultationBlockProps } from "./ConsultationBlock.types"
import { ConsultationForm } from "../ConsultationForm"
import Highlighter from "react-highlight-words"
import styles from "./ConsultationBlock.module.css"
export function ConsultationBlock({
	keyPoints,
	title,
	keywords,
}: ConsultationBlockProps) {
	return (
		<section className={styles.consultationblock}>
			<div className={styles.content__container}>
				<div className={styles.consultationblock__info}>
					<h4 className={styles.title}>
						<Highlighter
							searchWords={keywords}
							textToHighlight={title}
							autoEscape
							highlightClassName={styles.highlight}
							caseSensitive={false}
						/>
					</h4>
					<ul className={styles.list}>
						{keyPoints.map((item) => (
							<li key={item} className={styles.list_item}>
								{item}
							</li>
						))}
					</ul>
				</div>
				<ConsultationForm />
			</div>
		</section>
	)
}
