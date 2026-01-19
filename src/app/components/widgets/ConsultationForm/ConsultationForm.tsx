"use client"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
import styles from "./ConsultationForm.module.css"
import Dropdown from "../../shared/Dropdown"
import clsx from "clsx"
import { sendMessageToTelegram } from "./_api/action"
import { useState } from "react"

export function ConsultationForm() {
	const t = useTranslations("ConsultationForm")
	const [submitError, setSubmitError] = useState<string | null>(null)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const consultationFormSchema = z.object({
		name: z.string().min(2, t("errors.name")),
		phone: z.e164({ message: t("errors.phone") }),
		preferredType: z.enum(["call", "sms"]),
	})
	type FormValues = z.infer<typeof consultationFormSchema>

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		reset,
	} = useForm<FormValues>({
		resolver: zodResolver(consultationFormSchema),
		defaultValues: {
			name: "",
			phone: "",
			preferredType: "call",
		},
	})
	const onSubmit = handleSubmit(async (data) => {
		setIsSubmitting(true)
		setSubmitError(null)
		const result = await sendMessageToTelegram(data)
		setIsSubmitting(false)

		if (!result.success) {
			setSubmitError(result.error || t("errors.generic_submit"))
		} else {
			alert("Успешно отправлено!")
			reset()
		}
	})
	return (
		<form onSubmit={onSubmit} className={styles.form}>
			{submitError && (
				<div className={styles.input__container}>
					<Dropdown sideToPopUp="bottom" variant="error">
						<p className={styles.error}>{submitError}</p>
					</Dropdown>
				</div>
			)}
			<div className={styles.input__container}>
				<input
					{...register("name")}
					placeholder={t("placeholders.name")}
					className={styles.input}
				/>

				<div
					className={clsx({
						[styles.hidden]: !errors.name?.message,
					})}
				>
					<Dropdown sideToPopUp="bottom" variant="error">
						<p className={styles.error}>
							{errors.name?.message ?? ""}
						</p>
					</Dropdown>
				</div>
			</div>

			<div className={styles.input__container}>
				<Controller
					name="phone"
					control={control}
					render={({ field: { onChange, value } }) => (
						<PhoneInput
							placeholder={t("placeholders.phone")}
							value={value}
							onChange={onChange}
							defaultCountry="RU"
							international
							className={styles.phoneInput}
							numberInputProps={{
								className: styles.innerInput,
							}}
						/>
					)}
				/>
				<div
					className={clsx({
						[styles.hidden]: !errors.phone?.message,
					})}
				>
					<Dropdown sideToPopUp="bottom" variant="error">
						<p className={styles.error}>{errors.phone?.message}</p>
					</Dropdown>
				</div>
			</div>
			<div className={styles.radio__container}>
				<div className={styles.radio__container_option}>
					<input
						{...register("preferredType")}
						type="radio"
						id="sms"
						value="sms"
					/>
					<label htmlFor="sms">{t("sms")}</label>
				</div>
				<div className={styles.radio__container_option}>
					<input
						{...register("preferredType")}
						type="radio"
						id="call"
						value="call"
					/>
					<label htmlFor="call">{t("call")}</label>
				</div>
			</div>
			<button
				type="submit"
				className={styles.send_btn}
				disabled={isSubmitting}
			>
				{t("submitButton")}
			</button>
		</form>
	)
}
