import { StaticImageData } from "next/image"

export interface FooterProps {
	navigation: {
		title: string
		elements: { leadsTo: string; text: string }[]
	}[]
	socials: { icon: StaticImageData; link: string }[]
}
