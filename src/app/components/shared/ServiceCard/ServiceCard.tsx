"use client";
import styles from "./ServiceCard.module.css";
import { ServiceCardProps, ListContainer, ListItem } from "./ServiceCard.types";
import Highlighter from "react-highlight-words";
import { useState } from "react";
import { findWholeWordChunks } from "../../lib/utils/findChunks";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export function ServiceCard({
	list,
	previewText,
	price,
	tariffName,
}: ServiceCardProps) {
	const t = useTranslations();
	const [isOpened, setOpened] = useState(false);

	const renderTextValue = (value: string | string[]) =>
		Array.isArray(value) ? value : t(value);

	const renderTextHighlight = (
		value: string | string[],
		searchWords: string[] = [],
		className?: string,
	) => {
		if (Array.isArray(value)) {
			return (
				<div className={className}>
					{value.map((line, idx) => (
						<p key={idx}>{line}</p>
					))}
				</div>
			);
		}

		return (
			<Highlighter
				searchWords={searchWords}
				textToHighlight={value}
				highlightClassName={className}
				findChunks={findWholeWordChunks}
			/>
		);
	};

	const renderList = (item: ListContainer | ListItem) => {
		const isListItem = "text" in item;
		const ListTag = !isListItem ? item.listType : "ul";
		return isListItem ? (
			<div className={styles.list__item}>
				{item.title && (
					<span className={styles.list__item_title}>
						<Highlighter
							searchWords={item?.title.keywords ?? []}
							textToHighlight={t(item?.title.title ?? "")}
							highlightClassName={styles.list__item_title_highlight}
							findChunks={findWholeWordChunks}
						/>
					</span>
				)}

				<div className={styles.list__item_text}>
					{renderTextHighlight(
						item.text.text,
						item.text.keywords ?? [],
						styles.list__item_text_highlight,
					)}
				</div>
			</div>
		) : (
			<div className={styles.list__wrapper}>
				{item.title && (
					<span className={styles.list__item_title}>
						<Highlighter
							searchWords={item.title.keywords ?? []}
							textToHighlight={t(item.title.title)}
							highlightClassName={styles.list__item_title_highlight}
							findChunks={findWholeWordChunks}
						/>
					</span>
				)}
				<ListTag className={styles.list}>
					{item.items.map((elem) => (
						<li
							className={styles.list__element}
							key={`${Array.isArray(elem.text) ? elem.text.join("|") : elem.text}-${elem.keywords}`}>
							{renderTextHighlight(
								elem.text,
								elem.keywords ?? [],
								styles.list__element_highlight,
							)}
							{elem.subArray && renderList(elem.subArray)}
						</li>
					))}
				</ListTag>
			</div>
		);
	};

	return (
		<div
			className={styles.card__wrapper}
			style={{ "--color-passed": price.color } as React.CSSProperties}>
			<div
				className={styles.card__content_preview}
				onClick={() => setOpened(!isOpened)}>
				<h6 className={styles.card_title}>{t(tariffName)}</h6>
				<p className={styles.card_preview}>{t(previewText)}</p>
				<span className={styles.price}>{t(price.text)}</span>
				<span className={styles.card_details_trigger}>
					{isOpened ? "+" : "—"}
				</span>
			</div>
			<div
				className={clsx(styles.card_list_container, {
					[styles.visible]: isOpened,
				})}>
				{Array.isArray(list)
					? list.map((item, i) => <div key={i}>{renderList(item)}</div>)
					: renderList(list)}
			</div>
		</div>
	);
}
