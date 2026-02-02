import { StaticImageData } from "next/image"

export interface ServiceIntroBlockProps {
	title: string
	text: string
	image?: StaticImageData
	className?: string
}
