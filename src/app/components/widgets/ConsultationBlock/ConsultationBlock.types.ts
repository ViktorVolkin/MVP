import { ConsultationFormProps } from "../ConsultationForm/ConsultationForm.types"

export interface ConsultationBlockProps extends ConsultationFormProps {
	title: string
	keyPoints: string[]
}
