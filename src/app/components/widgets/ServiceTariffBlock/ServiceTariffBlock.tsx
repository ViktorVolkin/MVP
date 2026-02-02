import { ServiceTariffBlockProps } from "./ServiceTariffBlock.types"
import styles from "./ServiceTariffBlock.module.css"
import { ServiceCard } from "../../shared/ServiceCard"
export function ServiceTariffBlock({
	title,
	description,
	cards,
}: ServiceTariffBlockProps) {
	return (
		<section className={styles.tariff__block}>
			<div className={styles.info}>
				<h6 className={styles.title}>{title}</h6>
				<p className={styles.description}>{description}</p>
			</div>
			<div className={styles.cards}>
				{cards.map((elem) => (
					<ServiceCard {...elem} key={elem.tariffName} />
				))}
			</div>
		</section>
	)
}
