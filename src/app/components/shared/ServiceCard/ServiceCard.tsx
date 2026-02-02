"use client"
import styles from "./ServiceCard.module.css"
import { ServiceCardProps, ListContainer, ListItem } from "./ServiceCard.types"
import Highlighter from "react-highlight-words"
import { useState, useRef } from "react"

export function ServiceCard({
	list,
	previewText,
	price,
	tariffName,
}: ServiceCardProps) {
	const [isOpened, setOpened] = useState(false)

	const renderList = (item: ListContainer | ListItem) => {
		const isListItem = "text" in item
		const ListTag = !isListItem ? item.listType : "ul"
		return isListItem ? (
			<div className={styles.list__item}>
				{item.title && (
					<span className={styles.list__item_title}>
						<Highlighter
							searchWords={item?.title.keywords ?? []}
							textToHighlight={item?.title.title}
							highlightClassName={
								styles.list__item_title_highlight
							}
						/>
					</span>
				)}

				<p className={styles.list__item_text}>
					<Highlighter
						searchWords={item.text.keywords ?? []}
						textToHighlight={item.text.text}
						highlightClassName={styles.list__item_text_highlight}
					/>
				</p>
			</div>
		) : (
			<div className={styles.list__wrapper}>
				{item.title && (
					<span className={styles.list__item_title}>
						<Highlighter
							searchWords={item.title.keywords ?? []}
							textToHighlight={item.title.title}
							highlightClassName={
								styles.list__item_title_highlight
							}
						/>
					</span>
				)}
				<ListTag className={styles.list}>
					{item.items.map((elem) => (
						<li
							className={styles.list__element}
							key={`${elem.text}-${elem.keywords}`}
						>
							<Highlighter
								searchWords={elem.keywords ?? []}
								textToHighlight={elem.text}
								highlightClassName={
									styles.list__element_highlight
								}
							/>
							{elem.subArray && renderList(elem.subArray)}
						</li>
					))}
				</ListTag>
			</div>
		)
	}

	return (
		<div
			className={styles.card__wrapper}
			style={{ "--color-passed": price.color } as React.CSSProperties}
		>
			<div
				className={styles.card__content_preview}
				onClick={() => setOpened(!isOpened)}
			>
				<h6 className={styles.card_title}>{tariffName}</h6>
				<p className={styles.card_preview}>{previewText}</p>
				<span className={styles.price}>{price.text}</span>
				<span className={styles.card_details_trigger}>
					{isOpened ? "+" : "—"}
				</span>
			</div>
			{isOpened && (
				<div className={styles.card_list_container}>
					{Array.isArray(list)
						? list.map((item, i) => (
								<div key={i}>{renderList(item)}</div>
							))
						: renderList(list)}
				</div>
			)}
		</div>
	)
}
