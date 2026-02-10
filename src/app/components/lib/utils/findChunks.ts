import { FindChunks, Chunk } from "react-highlight-words"

export const findWholeWordChunks = ({
	searchWords,
	textToHighlight,
}: FindChunks): Chunk[] => {
	const chunks: Chunk[] = []

	searchWords.forEach((word) => {
		const wordString = typeof word === "string" ? word : word.source

		if (!wordString || wordString.trim() === "") return

		const escapedWord = wordString.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

		const regex = new RegExp(
			`(?<![а-яА-ЯёЁa-zA-Z0-9_-])${escapedWord}(?![а-яА-ЯёЁa-zA-Z0-9_-])`,
			"gi",
		)

		let match: RegExpExecArray | null
		while ((match = regex.exec(textToHighlight)) !== null) {
			chunks.push({
				start: match.index,
				end: regex.lastIndex,
			})
		}
	})

	return chunks
}
