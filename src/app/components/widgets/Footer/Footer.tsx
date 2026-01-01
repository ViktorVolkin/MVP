import { Link } from "@/i18n/navigation"
import styles from "./Footer.module.css"
import { FooterProps } from "./Footer.types"
import { getTranslations } from "next-intl/server"
import Image from "next/image"
import Logo from "@/../public/logo.png"
export async function Footer({ navigation, socials }: FooterProps) {
	const t = await getTranslations("footer")
	return (
		<footer className={styles.footer__wrapper}>
			<div className={styles.footer__container}>
				<div className={styles.data__block}>
					<Image
						className={styles.data__block_logo}
						src={Logo}
						alt={"WebLeadCraft"}
						width={100}
						height={80}
					></Image>
					<p className={styles.data__block_desc}>
						{t("companyDescription")}
					</p>
				</div>
				{navigation.map((item) => (
					<div className={styles.data__block} key={item.title}>
						<h4 className={styles.data__block_title}>
							{item.title}
						</h4>
						<ul className={styles.data__block_list}>
							{item.elements.map((item) => (
								<li
									className={styles.data__block_list_item}
									key={`${item.text}-${item.leadsTo}`}
								>
									<Link href={item.leadsTo}>{item.text}</Link>
								</li>
							))}
						</ul>
					</div>
				))}
				<div className={styles.data__block}>
					<h4 className={styles.data__block_title}>{t("socials")}</h4>
					<ul className={styles.socials__list}>
						{socials.map((item) => (
							<li
								className={styles.socials__list_item}
								key={`${item.icon}-${item.link}`}
							>
								<Link href={item.link}>
									<Image
										src={item.icon}
										alt={item.link}
										width={40}
										height={40}
									></Image>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	)
}
