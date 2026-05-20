"use client";

import clsx from "clsx";
import styles from "./ButtonIntoView.module.css";
import { ButtonProps } from "./ButtonIntoView.types";
import { useTranslations } from "next-intl";
import { useCallback } from "react";

export function ButtonIntoView({
	text,
	href,
	className,
	...rest
}: ButtonProps) {
	const t = useTranslations("MainPage");

	const handleScroll = useCallback(
		(e: React.MouseEvent) => {
			e.preventDefault();

			const el = document.getElementById(href);

			if (el) {
				el.scrollIntoView({ behavior: "smooth", block: "start" });

				window.history.pushState(null, "", `#${href}`);
			}
		},
		[href],
	);

	return (
		<button
			type="button"
			className={clsx(styles.button, className)}
			onClick={handleScroll}
			{...rest}>
			{t(text)}
		</button>
	);
}
