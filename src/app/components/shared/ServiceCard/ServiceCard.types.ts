interface ListItemBase {
	title?: { title: string; keywords?: string[] }
}

export interface ListItem extends ListItemBase {
	text: { text: string; keywords?: string[] }
}

export interface ListContainer extends ListItemBase {
	items: { text: string; keywords?: string[]; subArray?: ListContainer }[]
	listType: "ol" | "ul"
}

export interface ServiceCardProps {
	tariffName: string
	previewText: string
	price: { text: string; color?: string }
	list: (ListContainer | ListItem)[] | ListContainer | ListItem
}
