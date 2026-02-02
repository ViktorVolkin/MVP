import { ServiceCardProps } from "../../shared/ServiceCard/ServiceCard.types"

export interface ServiceTariffBlockProps {
	title: string
	description?: string
	cards: ServiceCardProps[]
}
