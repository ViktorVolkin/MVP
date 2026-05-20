import { PreviewCardProps } from "../../shared/PreviewCard/PreviewCard.types";

export interface IntroductionBlockProps {
	title: string;
	aboutCompanyBlock: { title: string; subtitle: string; text: string };
	children: React.ReactNode;
}
