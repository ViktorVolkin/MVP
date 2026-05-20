import { IntroductionBlock } from "../../widgets/IntroductionBlock";
import { ServicesBlock } from "../../widgets/ServicesBlock";
import { AboutUsBlock } from "../../widgets/AboutUsBlock";
import { StepsOfWork } from "../../widgets/StepsOfWork";
import { ConsultationBlock } from "../../widgets/ConsultationBlock";
import { mainPageContent } from "../../lib/constants/constants";
import { getTranslations } from "next-intl/server";
import { ConsultationForm } from "../../widgets/ConsultationForm";
import { PreviewCard } from "../../shared/PreviewCard";
import styles from "./MainPage.module.css";

export async function MainPage() {
	const t = await getTranslations("MainPage");

	return (
		<>
			<IntroductionBlock {...mainPageContent.introduction}>
				<div className={styles.cards__container}>
					{mainPageContent.introduction.previewCards.map((card, id) => (
						<PreviewCard
							key={id}
							button={card.button}
							subtitle={card.subtitle}
							text={card.text}
							title={card.title}
						/>
					))}
				</div>
			</IntroductionBlock>

			<ServicesBlock {...mainPageContent.services} />
			<AboutUsBlock {...mainPageContent.aboutUs} />
			<StepsOfWork {...mainPageContent.stepsOfWork} />
			<ConsultationBlock {...mainPageContent.consultationBlock}>
				<ConsultationForm />
			</ConsultationBlock>
		</>
	);
}
