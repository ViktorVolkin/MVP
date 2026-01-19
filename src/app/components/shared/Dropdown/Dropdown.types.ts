import { StaticImageData } from "next/image"

export interface DropdownProps {
	buttonText?: string
	iconBeforeText?: StaticImageData
	children: React.ReactNode
	sideToPopUp: "left" | "right" | "bottom"
	variant?: "menu" | "error"
}
