import { StaticImageData } from "next/image"

export interface ServicesBlockProps {
	title: string
	titleKeywords: string[]
	services: Array<{ title: string; text: string; image: StaticImageData }>
}
