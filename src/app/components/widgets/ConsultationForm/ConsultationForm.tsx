"use client"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useMemo } from "react"

export function ConsultationForm() {
	const t = useTranslations("ConsultationForm")
	const servicesArray = useMemo(() => t.raw("services") as string[], [])

	const consultationFormSchema = z.object({
		name: z.string().min(2, t("errors.name")),
		phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, t("errors.phone")),
		services: z.enum(servicesArray, { message: t("errors.services") }),
		contactMethod: z
			.enum(["call", "sms"], { error: t("errors.contactMethod") })
			.optional(),
	})

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(consultationFormSchema),
		defaultValues: {
			name: "",
			phone: "",
			services: undefined,
		},
	})

	const selectedService = watch("services")

	return (
		<form
			onSubmit={handleSubmit((d) => console.log(d))}
			className="space-y-4"
		>
			<input {...register("name")} placeholder="Имя" />
			{errors.name && <p>{errors.name.message as string}</p>}

			<input {...register("phone")} placeholder="+7..." />
			{errors.phone && <p>{errors.phone.message as string}</p>}

			<select {...register("services")}>
				<option value="">Выберите услугу</option>
				{servicesArray.map((service) => (
					<option key={service} value={service}>
						{service}
					</option>
				))}
			</select>
			{errors.services && <p>{errors.services.message as string}</p>}

			{selectedService && (
				<div>
					<label>
						<input
							type="radio"
							value="call"
							{...register("contactMethod")}
						/>{" "}
						Call
					</label>
					<label>
						<input
							type="radio"
							value="sms"
							{...register("contactMethod")}
						/>{" "}
						SMS
					</label>
				</div>
			)}

			<button type="submit">Отправить</button>
		</form>
	)
}
