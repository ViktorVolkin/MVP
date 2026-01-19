"use client"
import styles from "./Dropdown.module.css"
import { useState, useRef, useEffect } from "react"
import arrowDown from "@/../public/arrowDown.svg"
import React from "react"
import Image from "next/image"
import type { DropdownProps } from "./Dropdown.types"
import clsx from "clsx"
export const Dropdown = ({
	buttonText,
	iconBeforeText,
	children,
	sideToPopUp = "left",
	variant,
}: DropdownProps) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const isError = variant === "error"
	const [isOpen, setIsOpen] = useState(isError)
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}
		if (isError || !isOpen)
			return document.removeEventListener("click", handleClickOutside)
		document.addEventListener("click", handleClickOutside)
		return () => {
			document.removeEventListener("click", handleClickOutside)
		}
	}, [isOpen])

	return (
		<div className={styles.dropdown__container} ref={containerRef}>
			<div
				className={styles.dropdown__button}
				onClick={() => (variant !== "error" ? setIsOpen(!isOpen) : "")}
				aria-haspopup="true"
				aria-expanded={isOpen}
			>
				{iconBeforeText && (
					<Image
						src={iconBeforeText}
						alt="dropdown icon"
						className={styles.dropdown__iconBeforeText}
						width={24}
						height={24}
					/>
				)}
				{buttonText}
				{!isError && (
					<Image
						src={arrowDown}
						alt="arrow"
						width={18}
						height={18}
						className={clsx(styles.dropdown__icon, {
							[styles.dropdown__icon_open]: isOpen,
						})}
					/>
				)}

				{isOpen && (
					<ul
						className={clsx(
							styles.dropdown__list,
							styles[`dropdown__list_${sideToPopUp}`]
						)}
					>
						{React.Children.map(children, (child, index) => (
							<li
								key={index}
								className={clsx(styles.dropdown__listItem, {
									[styles.dropdown__listItem_error]: isError,
								})}
							>
								{child}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	)
}
