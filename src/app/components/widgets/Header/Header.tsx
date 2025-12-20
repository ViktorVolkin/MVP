"use client"
import styles from "./Header.module.css"
import { Link } from "@/i18n/navigation"
import Image from "next/image"
import Logo from "@/../public/logo.png"
import BurgerMenu from "@/../public/burgerMenu.svg"
import { useMedia } from "../../lib/hooks/useMedia"
import { Activity, useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import Dropdown from "../../shared/Dropdown"
import { routing } from "@/i18n/routing"
import russianFlag from "@/../public/russianFlag.png"
import unitedKingdomFlag from "@/../public/UKflag.png"
import SidebarMenu from "../SidebarMenu"
import TelegramIcon from "@/../public/telegram.svg"
import { useSwitchLanguage } from "../../lib/hooks"
export function Header({
	listLinks,
	phoneButton,
	telegram,
	email,
}: {
	listLinks: { text: string; leadsTo: string }[]
	phoneButton: { phoneNumber: string; makeCall: string }
	telegram: string
	email: string
}) {
	const [popupOpen, setPopupOpen] = useState<boolean>(false)
	const isDesktop = useMedia(1200, 99999)
	const t = useTranslations()
	const currentLanguage = useLocale()
	const handleLanguageChange = useSwitchLanguage()
	return (
		<header className={styles.header__container}>
			<div className={styles.header__wrapper}>
				<Link href={"/"}>
					<Image
						width={95}
						height={80}
						src={Logo}
						alt="Web Lead Craft"
						className={styles.logo}
					/>
				</Link>
				<Activity mode={isDesktop ? "visible" : "hidden"}>
					<nav className={styles.header__navigation}>
						<ul className={styles.navigation__list}>
							{listLinks.map((item) => (
								<li
									className={styles.navigation__list_item}
									key={`${item.leadsTo}-${item.text}`}
								>
									<Link href={item.leadsTo}>{item.text}</Link>
								</li>
							))}
							<li>
								<Dropdown
									sideToPopUp="right"
									buttonText={
										currentLanguage === "ru" ? "RUS" : "ENG"
									}
									iconBeforeText={
										currentLanguage === "ru"
											? russianFlag
											: unitedKingdomFlag
									}
								>
									<>
										{routing.locales
											.filter(
												(lang) =>
													lang !== currentLanguage
											)
											.map((item) => (
												<button
													key={item}
													onClick={() =>
														handleLanguageChange(
															item
														)
													}
												>
													{item === "ru"
														? "RUS"
														: "ENG"}
												</button>
											))}
									</>
								</Dropdown>
							</li>
						</ul>
						<Link
							href={`tel:${phoneButton.phoneNumber}`}
							className={styles.navigation__button_call}
						>
							{phoneButton.phoneNumber}
							<span className={styles.make_call}>
								{phoneButton.makeCall}
							</span>
						</Link>
					</nav>
				</Activity>

				<Activity mode={!isDesktop ? "visible" : "hidden"}>
					<div className={styles.phone__buttons}>
						<Dropdown
							sideToPopUp="right"
							buttonText={
								currentLanguage === "ru" ? "RUS" : "ENG"
							}
							iconBeforeText={
								currentLanguage === "ru"
									? russianFlag
									: unitedKingdomFlag
							}
						>
							<>
								{routing.locales
									.filter((lang) => lang !== currentLanguage)
									.map((item) => (
										<button
											key={item}
											onClick={() =>
												handleLanguageChange(item)
											}
										>
											{item === "ru" ? "RUS" : "ENG"}
										</button>
									))}
							</>
						</Dropdown>
						<button className={styles.popup}>
							<Image
								src={BurgerMenu}
								alt={t("alts.burgerMenu")}
								onClick={() => setPopupOpen(!popupOpen)}
							/>
						</button>
					</div>
				</Activity>
				<SidebarMenu
					isOpen={popupOpen}
					onClose={() => setPopupOpen(false)}
				>
					<div className={styles.sidebarMenu__wrapper}>
						<div className={styles.sidebarMenu__contacts}>
							<Link
								href={telegram}
								className={
									styles.sidebarMenu__contacts_telegram
								}
							>
								<Image
									src={TelegramIcon}
									alt={t("alts.telegram")}
									width={42}
									height={42}
								/>
							</Link>
							<Link
								href={`tel:${phoneButton.phoneNumber}`}
								className={styles.sidebarMenu__phone_number}
							>
								{phoneButton.phoneNumber}
							</Link>
							<Link
								href={`mailto:${email}`}
								className={styles.sidebarMenu__email}
							>
								{email}
							</Link>
						</div>
						<ul className={styles.sidebarMenu__list}>
							{listLinks.map((item) => (
								<li
									className={styles.sidebarMenu__list_item}
									key={`${item.leadsTo}-${item.text}`}
								>
									<Link href={item.leadsTo}>{item.text}</Link>
								</li>
							))}
						</ul>
					</div>
				</SidebarMenu>
			</div>
		</header>
	)
}
