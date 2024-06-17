//- React
import React, { useState } from "react"

//- API
import * as sneakers from "@/api/sneakers"
import type { Category, SneakerDetails } from "@/api/sneakers"

//- Components
import Filter from "./Filter"
import Radio from "./Radio"

//- Icons
import * as Icon from "@/icons/icons"

const applyText: string = "Aplicar filtro"
const unapplyText: string = "Remover filtro"

const initialFilterState: Category = {
	ankleHeight: null,
	color: null,
	design: null,
	material: null,
	sex: null,
	shoeLace: null
}

interface FilterScreenProps {
	onFilterApplied: (filter: SneakerDetails[]) => void
}

export default function FilterScreen(props: FilterScreenProps): React.JSX.Element {
	const [selectedFilter, setSelectedFilter] = useState<Category>(initialFilterState)
	const [filteredSneakers, setFilteredSneakers] = useState<SneakerDetails[]>([])
	const [actionButtonText, setActionButtonText] = useState<string>(applyText)

	const handleRadioChange = (id: keyof Category, value: string) => {
		setSelectedFilter(previousFilter => ({
			...previousFilter,
			[id]: value,
		}))

		if (actionButtonText === unapplyText) setActionButtonText(applyText)
	}

	const filterSneakers = (): void => {
		const allSneakers = [
			...sneakers.masculineSneakers,
			...sneakers.feminineSneakers,
			...sneakers.teensSneakers,
			...sneakers.collectionSneakers.autumn,
			...sneakers.collectionSneakers.spring,
			...sneakers.collectionSneakers.summer,
			...sneakers.collectionSneakers.winter
		]

		const sneakersInTheFilter = allSneakers.filter(sneaker => {
			return Object.entries(selectedFilter).every(
				([key, value]) => {
					if (value === null) return true

					const categoryKey = key as keyof Category
					return sneaker.category[categoryKey] === value
				})
		})

		setFilteredSneakers(sneakersInTheFilter)
		props.onFilterApplied(sneakersInTheFilter)
	}

	const unfilterSneakers = (): void => {
		setSelectedFilter(initialFilterState)

		const filterRadio: NodeListOf<HTMLInputElement> = document.querySelectorAll(".filter-radio")
		filterRadio.forEach(input => input.checked = false)
	}

	return (
		<aside className="filter-screen" onClick={event => event.stopPropagation()}>
			<p className="help-text">
				Para aplicar o filtro, clique em <q><span className="explanatory-text">Aplicar filtro</span></q>.
			</p>
			<p className="help-text">
				Clique no ícone {<q><Icon.RemoveFilter className="explanatory-icon" /></q>} para remover o filtro.
			</p>

			<Filter category="Sexo">
				<Radio label="Unissex" id="sex" index={1} onChange={handleRadioChange} />
				<Radio label="Masculino" id="sex" index={2} onChange={handleRadioChange} />
				<Radio label="Feminino" id="sex" index={3} onChange={handleRadioChange} />
			</Filter>
			<Filter category="Design">
				<Radio label="Liso" id="design" index={1} onChange={handleRadioChange} />
				<Radio label="Estampado" id="design" index={2} onChange={handleRadioChange} />
			</Filter>
			<Filter category="Altura do Tornozelo">
				<Radio label="Baixo" id="ankleHeight" index={1} onChange={handleRadioChange} />
				<Radio label="Médio" id="ankleHeight" index={2} onChange={handleRadioChange} />
				<Radio label="Alto" id="ankleHeight" index={3} onChange={handleRadioChange} />
			</Filter>
			<Filter category="Cadarços">
				<Radio label="Com cadarço" id="shoeLace" index={1} onChange={handleRadioChange} />
				<Radio label="Sem cadarço" id="shoeLace" index={2} onChange={handleRadioChange} />
			</Filter>
			<Filter category="Cor">
				<Radio label="Normal" id="color" index={1} onChange={handleRadioChange} />
				<Radio label="Colorido" id="color" index={2} onChange={handleRadioChange} />
			</Filter>
			<Filter category="Material">
				<Radio label="Padrão" id="material" index={1} onChange={handleRadioChange} />
				<Radio label="Premium" id="material" index={2} onChange={handleRadioChange} />
			</Filter>

			<div className="filter-actions">
				<button
					type="button"
					className="unapply-filter"
					onClick={
						(): void => {
							unfilterSneakers()
							setActionButtonText(unapplyText)
						}}
				>
					<Icon.RemoveFilter className="unapply-filter-icon" />
				</button>
				<button
					type="button"
					className="apply-filter"
					onClick={
						(): void => {
							filterSneakers()
							setActionButtonText(applyText)
						}}
				>
					{actionButtonText}
				</button>
			</div>
		</aside>
	)
}
