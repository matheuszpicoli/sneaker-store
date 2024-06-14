//- React
import React from "react"

//- API
import * as sneakers from "@/api/sneakers"
import type { SneakerDetails } from "@/api/sneakers"

//- Components
import SectionModel from "./SectionModel"

type Month = {
	january: 1,
	february: 2,
	march: 3,
	april: 4,
	may: 5,
	june: 6,
	july: 7,
	august: 8,
	september: 9,
	october: 10,
	november: 11,
	december: 12
}

type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type DayOfMonth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31

type Season = "summer" | "autumn" | "winter" | "spring" | undefined

function isDateInRange(startMonth: MonthNumber, startDay: DayOfMonth, endMonth: MonthNumber, endDay: DayOfMonth): boolean {
	const currentMonth = new Date().getMonth() + 1
	const currentDay = new Date().getDate()

	const startDate = new Date(startMonth - 1, startDay)
	const currentDate = new Date(currentMonth - 1, currentDay)
	const endDate = new Date(endMonth - 1, endDay)

	return currentDate >= startDate && currentDate < endDate
}

function getSeason(): Season {
	const month: Month = { january: 1, february: 2, march: 3, april: 4, may: 5, june: 6, july: 7, august: 8, september: 9, october: 10, november: 11, december: 12 }

	switch (true) {
		case isDateInRange(month.december, 22, month.march, 20):
			return "summer"
		case isDateInRange(month.march, 20, month.june, 21):
			return "autumn"
		case isDateInRange(month.june, 21, month.september, 23):
			return "winter"
		case isDateInRange(month.september, 23, month.december, 22):
			return "spring"
		default:
			return undefined
	}
}

const aboutTheSection: string = "Confira a nossa seção de tênis para "

export const maskForPrice = (price: number): string => `R$ ${price.toFixed(2).replace(".", ",")}`

interface SectionProps {
	reference: "masculine" | "feminine" | "teens" | "collections"
	filter: SneakerDetails[]
}

export default function Section(props: SectionProps): React.JSX.Element {
	const season: Season = getSeason()
	let filteredSneakers: SneakerDetails[] = []

	if (props.reference === "collections" && season) filteredSneakers = sneakers.collectionSneakers[season]
	else {
		filteredSneakers = {
			masculine: sneakers.masculineSneakers,
			feminine: sneakers.feminineSneakers,
			teens: sneakers.teensSneakers,
			collections: season ? sneakers.collectionSneakers[season] : []
		}[props.reference]
	}

	if (props.filter) filteredSneakers = filteredSneakers.filter(sneaker => props.filter.includes(sneaker))

	const isFiltered: boolean = props.filter && props.filter.length > 0

	return (
		<React.Fragment>
			{props.reference === "masculine" && (
				<SectionModel
					id="masculine"
					title="Masculino"
					text={aboutTheSection.concat("os homens.")}
					sneakers={!isFiltered ? sneakers.masculineSneakers : filteredSneakers}
				/>
			)}
			{props.reference === "feminine" && (
				<SectionModel
					id="feminine"
					title="Feminino"
					text={aboutTheSection.concat("as mulheres.")}
					sneakers={!isFiltered ? sneakers.feminineSneakers : filteredSneakers}
				/>
			)}
			{props.reference === "teens" && (
				<SectionModel
					id="teens"
					title="Teens"
					text={aboutTheSection.concat("os jovens.")}
					sneakers={!isFiltered ? sneakers.teensSneakers : filteredSneakers}
				/>
			)}
			{props.reference === "collections" && (
				<React.Fragment>
					{getSeason() === "summer" && (
						<SectionModel
							id="collections"
							title="Coleções de Verão"
							text={aboutTheSection.concat("o verão.")}
							sneakers={!isFiltered ? sneakers.collectionSneakers.summer : filteredSneakers}
						/>
					)}
					{getSeason() === "autumn" && (
						<SectionModel
							id="collections"
							title="Coleções de Outono"
							text={aboutTheSection.concat("o outono.")}
							sneakers={!isFiltered ? sneakers.collectionSneakers.autumn : filteredSneakers}
						/>
					)}
					{getSeason() === "winter" && (
						<SectionModel
							id="collections"
							title="Coleções de Inverno"
							text={aboutTheSection.concat("o inverno.")}
							sneakers={!isFiltered ? sneakers.collectionSneakers.winter : filteredSneakers}
						/>
					)}
					{getSeason() === "spring" && (
						<SectionModel
							id="collections"
							title="Coleções de Primavera"
							text={aboutTheSection.concat("a primavera.")}
							sneakers={!isFiltered ? sneakers.collectionSneakers.spring : filteredSneakers}
						/>
					)}
					{getSeason() === undefined && (
						<section id="collections" className="collections">
							<h3 className="section-title">Em breve</h3>
						</section>
					)}
				</React.Fragment>
			)}
		</React.Fragment>
	)
}
