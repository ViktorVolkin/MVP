import styles from "./ServicesBlock.module.css"
import { ServicesBlockProps } from "./ServicesBlock.types"
import Highlighter from "react-highlight-words"
import Image from "next/image"
export function ServicesBlock({
	services,
	title,
	titleKeywords,
}: ServicesBlockProps) {
	return (
		<section className={styles.services__container}>
			<h3 className={styles.services__title}>
				<Highlighter
					highlightClassName={styles.services__title_keyword}
					searchWords={titleKeywords}
					autoEscape={true}
					textToHighlight={title}
				/>
			</h3>
			<ul className={styles.services__list}>
				{services.map((item) => (
					<li className={styles.services__list_item} key={item.title}>
						<h4 className={styles.list__item_title}>
							{item.title}
						</h4>
						<p className={styles.list__item_text}>{item.text}</p>
						<Image
							fill
							alt={item.title}
							src={item.image}
							className={styles.list__item_image}
						></Image>
					</li>
				))}
			</ul>
		</section>
	)
}
