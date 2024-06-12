//- React
import React from "react"

//- Icons
import * as Icon from "../icons/icons"

interface FilterProps {
	category: string,
	children: React.ReactNode
}

function Filter<T extends FilterProps>(props: T): React.JSX.Element {
	return (
		<section className="filter-section">
			<p className="filter-category">{props.category}</p>
			<div className="filter-options">
				{props.children}
			</div>
		</section>
	)
}

interface RadioProps {
	label: string,
	id: "sex" | "design" | "ankleHeight" | "shoeLace" | "color" | "material"
	index: number
}

function Radio<T extends RadioProps>(props: T): React.JSX.Element {
	return (
		<React.Fragment>
			<input
				type="radio"
				className="filter-radio"
				name={props.id}
				id={props.id.concat(props.index.toString())}
			/>
			<label
				htmlFor={props.id.concat(props.index.toString())}
				className="filter-label"
			>
				{props.label}
			</label>
		</React.Fragment>
	)
}

interface FilterScreenProps {
	buttonAction: () => void
}

export default function FilterSceen<T extends FilterScreenProps>(props: T): React.JSX.Element {
	return (
		<aside className="filter-screen">
			<strong className="help-text">
				Para aplicar o filtro, clique em <q className="text-in-quotation-marks">Aplicar filtro</q>.
			</strong>

			<Filter category="Sexo">
				<Radio label="Unissex" id="sex" index={1} />
				<Radio label="Masculino" id="sex" index={2} />
				<Radio label="Feminino" id="sex" index={3} />
			</Filter>
			<Filter category="Design">
				<Radio label="Liso" id="design" index={1} />
				<Radio label="Estampado" id="design" index={2} />
			</Filter>
			<Filter category="Altura do Tornozelo">
				<Radio label="Baixo" id="ankleHeight" index={1} />
				<Radio label="Médio" id="ankleHeight" index={2} />
				<Radio label="Alto" id="ankleHeight" index={3} />
			</Filter>
			<Filter category="Cadarços">
				<Radio label="Com cadarço" id="shoeLace" index={1} />
				<Radio label="Sem cadarço" id="shoeLace" index={2} />
			</Filter>
			<Filter category="Cor">
				<Radio label="Padrão" id="color" index={1} />
				<Radio label="Colorido" id="color" index={2} />
			</Filter>
			<Filter category="Material">
				<Radio label="Padrão" id="material" index={1} />
				<Radio label="Premium" id="material" index={2} />
			</Filter>

			<button
				className="apply-filter"
				onClick={props.buttonAction}
			>
				Aplicar filtro
			</button>
		</aside>
	)
}
