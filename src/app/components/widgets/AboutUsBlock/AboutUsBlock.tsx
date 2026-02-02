"use client"
import { Link } from "@/i18n/navigation"
import styles from "./AboutUsBlock.module.css"
import { AboutUsBlockProps } from "./AboutUsBlock.types"
import Highlighter from "react-highlight-words"
import { useCallback } from "react"

export function AboutUsBlock({
	title,
	items,
	discussProjectBtn,
}: AboutUsBlockProps) {
	const handleNavigation = useCallback(
		(e: React.MouseEvent) => {
			e.preventDefault()
			const el = document.getElementById(discussProjectBtn.anchor)
			if (!el) return
			el.scrollIntoView({ behavior: "smooth" })
		},
		[discussProjectBtn.anchor],
	)
	return (
		<section className={styles.about_us__wrapper}>
			<div className={styles.content__container}>
				<h3 className={styles.title}>
					<Highlighter
						searchWords={title.keywords}
						textToHighlight={title.text}
						caseSensitive={false}
						highlightClassName={styles.highlight}
						autoEscape
					/>
				</h3>
				<ul className={styles.about_us__list}>
					{items.map((item) => (
						<li
							className={styles.about_us__list_item}
							key={item.title}
						>
							<h6 className={styles.list_item_title}>
								{item.title}
							</h6>
							<p className={styles.list_item_text}>{item.text}</p>
						</li>
					))}
				</ul>
				<Link
					className={styles.discuss_project_btn}
					href={`#${discussProjectBtn.anchor}`}
					onClick={handleNavigation}
				>
					{discussProjectBtn.text}
				</Link>
			</div>
		</section>
	)
}
