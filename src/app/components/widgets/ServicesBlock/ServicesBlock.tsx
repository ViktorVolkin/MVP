import styles from "./ServicesBlock.module.css";
import { ServicesBlockProps } from "./ServicesBlock.types";
import Highlighter from "react-highlight-words";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
export async function ServicesBlock({
	services,
	title,
	titleKeywords,
}: ServicesBlockProps) {
	const t = await getTranslations("MainPage");
	return (
		<section className={styles.services__container}>
			<h3 className={styles.services__title}>
				<Highlighter
					highlightClassName={styles.services__title_keyword}
					searchWords={titleKeywords.map((k) => t(k))}
					autoEscape={true}
					textToHighlight={t(title)}
				/>
			</h3>
			<ul className={styles.services__list}>
				{services.map((item, idx) => (
					<li
						className={styles.services__list_item}
						key={idx}>
						<h4 className={styles.list__item_title}>{t(item.title)}</h4>
						<p className={styles.list__item_text}>{t(item.text)}</p>
						<Image
							fill
							alt={t(item.title)}
							src={item.image}
							className={styles.list__item_image}></Image>
					</li>
				))}
			</ul>
		</section>
	);
}
