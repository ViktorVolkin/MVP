import styles from "./AboutUsBlock.module.css";
import { AboutUsBlockProps } from "./AboutUsBlock.types";
import Highlighter from "react-highlight-words";
import { ButtonIntoView } from "@/app/components/shared/ButtonIntoView";
import { getTranslations } from "next-intl/server";
export async function AboutUsBlock({
	title,
	items,
	discussProjectBtn,
}: AboutUsBlockProps) {
	const t = await getTranslations("MainPage");

	return (
		<section className={styles.about_us__wrapper}>
			<div className={styles.content__container}>
				<h3 className={styles.title}>
					<Highlighter
						searchWords={title.keywords.map((k) => t(k))}
						textToHighlight={t(title.text)}
						caseSensitive={false}
						highlightClassName={styles.highlight}
						autoEscape
					/>
				</h3>
				<ul className={styles.about_us__list}>
					{items.map((item) => (
						<li
							className={styles.about_us__list_item}
							key={item.title}>
							<h6 className={styles.list_item_title}>{t(item.title)}</h6>
							<p className={styles.list_item_text}>{t(item.text)}</p>
						</li>
					))}
				</ul>
				<ButtonIntoView
					text={discussProjectBtn.text}
					href={discussProjectBtn.anchor}
					className={styles.discuss_project_btn}
				/>
			</div>
		</section>
	);
}
