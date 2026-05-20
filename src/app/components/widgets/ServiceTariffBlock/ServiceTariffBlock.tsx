import { ServiceTariffBlockProps } from "./ServiceTariffBlock.types";
import styles from "./ServiceTariffBlock.module.css";
import { getTranslations } from "next-intl/server";

export async function ServiceTariffBlock({
	title,
	description,
	children,
}: ServiceTariffBlockProps) {
	const t = await getTranslations();
	return (
		<section className={styles.tariff__block}>
			<div className={styles.info}>
				<h6 className={styles.title}>{t(title)}</h6>
				<p className={styles.description}>
					{description ? t(description) : null}
				</p>
			</div>
			{children}
		</section>
	);
}
