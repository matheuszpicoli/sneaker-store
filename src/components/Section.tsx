//- React
import React from "react"

//- Next
import Image from "next/image"

//- API
import * as sneakers from "@/api/sneakers"
import type { SneakerDetails } from "@/api/sneakers"

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

const aboutTheSection: string = "Confira a nossa seção de tênis para".concat(" ")

const maskForPrice = (price: number): string => `R$ ${price.toFixed(2).replace(".", ",")}`

interface SectionModelProps {
	id: string
	title: string
	text: string
	sneakers: SneakerDetails[]
}

function SectionModel<T extends SectionModelProps>(props: T): React.JSX.Element {
	return (
		<section id={props.id} className={props.id}>
			<h3 className="section-title">{props.title}</h3>
			<div className="content">
				<p className="about">{props.text}</p>
				<div className="sneakers">
					{props.sneakers.map((sneaker, index) => (
						<figure key={index}>
							<Image
								className="sneaker-photo"
								src={sneaker.image}
								alt={`Tênis ${props.title.toLowerCase()} ${index + 1}`}
								loading="lazy"
								priority={false}
							/>
							<figcaption className="sneaker-photo-subtitle">
								{sneaker.model}
								<p className="sneaker-price">{maskForPrice(sneaker.price)}</p>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}

interface SectionProps {
	reference: "masculine" | "feminine" | "teens" | "collections"
	filter: SneakerDetails[]
}

export default function Section<T extends SectionProps>(props: T): React.JSX.Element {
	const season: Season | undefined = getSeason()
	let sneakersToDisplay: SneakerDetails[] = []

	if (props.reference === "collections" && season) {
		sneakersToDisplay = sneakers.collectionSneakers[season]
	} else {
		sneakersToDisplay = {
			masculine: sneakers.masculineSneakers,
			feminine: sneakers.feminineSneakers,
			teens: sneakers.teensSneakers,
			collections: season ? sneakers.collectionSneakers[season] : [],
		}[props.reference]
	}

	if (props.filter) {
		sneakersToDisplay = sneakersToDisplay.filter(sneaker => props.filter.includes(sneaker));
	}

	return (
		<React.Fragment>
			{props.reference === "masculine" && (
				<SectionModel
					id="masculine"
					title="Masculino"
					text={aboutTheSection.concat("os homens.")}
					sneakers={sneakersToDisplay}
				/>
			)}
			{props.reference === "feminine" && (
				<SectionModel
					id="feminine"
					title="Feminino"
					text={aboutTheSection.concat("as mulheres.")}
					sneakers={sneakersToDisplay}
				/>
			)}
			{props.reference === "teens" && (
				<SectionModel
					id="teens"
					title="Teens"
					text={aboutTheSection.concat("os jovens.")}
					sneakers={sneakersToDisplay}
				/>
			)}
			{props.reference === "collections" && (
				<React.Fragment>
					{getSeason() === "summer" && (
						<SectionModel
							id="collections"
							title="Coleções de Verão"
							text={aboutTheSection.concat("o verão.")}
							sneakers={sneakersToDisplay}
						/>
					)}
					{getSeason() === "autumn" && (
						<SectionModel
							id="collections"
							title="Coleções de Outono"
							text={aboutTheSection.concat("o outono.")}
							sneakers={sneakersToDisplay}
						/>
					)}
					{getSeason() === "winter" && (
						<SectionModel
							id="collections"
							title="Coleções de Inverno"
							text={aboutTheSection.concat("o inverno.")}
							sneakers={sneakersToDisplay}
						/>
					)}
					{getSeason() === "spring" && (
						<SectionModel
							id="collections"
							title="Coleções de Primavera"
							text={aboutTheSection.concat("a primavera.")}
							sneakers={sneakersToDisplay}
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
