import { getMessages } from "next-intl/server";
import { ServiceIntroBlock } from "../../widgets/ServiceIntroBlock";
import image from "@/../public/фон10.png";
import { ServiceStepsBlock } from "../../widgets/ServiceStepsBlock";
import styles from "./ServiceMarketing.module.css";
import { ConsultationBlock } from "../../widgets/ConsultationBlock";
import { mainPageContent } from "../../lib/constants/constants";
import { ServiceTariffBlock } from "../../widgets/ServiceTariffBlock";
import { ServiceMarketingPageContent } from "../../lib/constants/serviceMarketingPage";
import { ConsultationForm } from "../../widgets/ConsultationForm";
import { ServiceCard } from "../../shared/ServiceCard/ServiceCard";
import { resolveMessageByPath } from "../../lib/utils/translationHelpers";

const translateListItem = (messages: any, item: any): any => {
	if ("text" in item) {
		const resolved = resolveMessageByPath(messages, item.text.text);
		return {
			...item,
			text: {
				...item.text,
				text: resolved !== undefined ? resolved : item.text.text,
			},
		};
	}

	return {
		...item,
		items: item.items.map((elem: any) => ({
			...elem,
			text: resolveMessageByPath(messages, elem.text) ?? elem.text,
			subArray: elem.subArray
				? translateListItem(messages, elem.subArray)
				: undefined,
		})),
	};
};

export async function ServiceMarketing() {
	const messages = await getMessages();
	const cards = ServiceMarketingPageContent.tariffs.cards.map((card) => ({
		...card,
		list: card.list.map((item) => translateListItem(messages, item)),
	}));

	return (
		<div className={styles.wrapper}>
			<ServiceIntroBlock
				{...ServiceMarketingPageContent.intro}
				image={image}
				className={styles.intro}
			/>

			<ServiceStepsBlock
				{...ServiceMarketingPageContent.steps}
				className={styles.steps}
			/>

			<ServiceTariffBlock {...ServiceMarketingPageContent.tariffs}>
				<div className={styles.cards}>
					{cards.map((elem) => (
						<ServiceCard
							{...elem}
							key={elem.tariffName}
						/>
					))}
				</div>
			</ServiceTariffBlock>

			<ConsultationBlock {...mainPageContent.consultationBlock}>
				<ConsultationForm className={styles.form} />
			</ConsultationBlock>
		</div>
	);
}
