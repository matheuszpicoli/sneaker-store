//- React
import React from "react"

//- API
import { filter } from "@/api/filter"
import type { Category } from "@/api/sneakers"

type ValidLabels = "Unissex" | "Masculino" | "Feminino" | "Liso" | "Estampado" | "Baixo" | "Médio" | "Alto" | "Com cadarço" | "Sem cadarço" | "Normal" | "Colorido" | "Padrão" | "Premium"

interface RadioProps {
	label: ValidLabels
	id: keyof Category
	index: number
	onChange: (id: keyof Category, value: string) => void
}

export default function Radio(props: RadioProps): React.JSX.Element {
	const labelToApiValue: { [key in ValidLabels]: string } = {
		"Unissex": filter.sex.unisex,
		"Masculino": filter.sex.masculine,
		"Feminino": filter.sex.feminine,
		"Liso": filter.design.straight,
		"Estampado": filter.design.patterned,
		"Baixo": filter.ankleHeight.low,
		"Médio": filter.ankleHeight.medium,
		"Alto": filter.ankleHeight.high,
		"Com cadarço": filter.shoeLace.withLaces,
		"Sem cadarço": filter.shoeLace.withoutLaces,
		"Normal": filter.color.standard,
		"Colorido": filter.color.colorful,
		"Padrão": filter.material.standard,
		"Premium": filter.material.premium
	}

	const handleChange = (): void => {
		props.onChange(props.id, labelToApiValue[props.label])
	}

	const inputId = props.id.concat(props.index.toString())

	return (
		<div className="filter-option">
			<input
				type="radio"
				className="filter-radio"
				id={inputId}
				name={props.id}
				onChange={handleChange}
			/>
			<label htmlFor={inputId} className="filter-label">
				{props.label}
			</label>
		</div>
	)
}
