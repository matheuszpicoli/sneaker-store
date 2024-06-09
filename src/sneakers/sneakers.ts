//- Next
import type { StaticImageData } from "next/image"

type Season = "summer" | "autumn" | "winter" | "spring"

type SneakerDetails = {
	image: StaticImageData
	model: string
	price: number
}

//? Collections
import autumnSneaker1 from "./collections/autumn/autumnSneaker1.jpg"
import autumnSneaker2 from "./collections/autumn/autumnSneaker2.jpg"
import autumnSneaker3 from "./collections/autumn/autumnSneaker3.jpg"
import autumnSneaker4 from "./collections/autumn/autumnSneaker4.jpg"

import springSneaker1 from "./collections/spring/springSneaker1.jpg"
import springSneaker2 from "./collections/spring/springSneaker2.jpg"
import springSneaker3 from "./collections/spring/springSneaker3.jpg"
import springSneaker4 from "./collections/spring/springSneaker4.jpg"

import summerSneaker1 from "./collections/summer/summerSneaker1.jpg"
import summerSneaker2 from "./collections/summer/summerSneaker2.jpg"
import summerSneaker3 from "./collections/summer/summerSneaker3.jpg"
import summerSneaker4 from "./collections/summer/summerSneaker4.jpg"

import winterSneaker1 from "./collections/winter/winterSneaker1.jpg"
import winterSneaker2 from "./collections/winter/winterSneaker2.jpg"
import winterSneaker3 from "./collections/winter/winterSneaker3.jpg"
import winterSneaker4 from "./collections/winter/winterSneaker4.jpg"

//? Femme
import femmeSneaker1 from "./femme/femmeSneaker1.jpg"
import femmeSneaker2 from "./femme/femmeSneaker2.jpg"
import femmeSneaker3 from "./femme/femmeSneaker3.jpg"
import femmeSneaker4 from "./femme/femmeSneaker4.jpg"

//? Male
import maleSneaker1 from "./male/maleSneaker1.jpg"
import maleSneaker2 from "./male/maleSneaker2.jpg"
import maleSneaker3 from "./male/maleSneaker3.jpg"
import maleSneaker4 from "./male/maleSneaker4.jpg"

//? Teens
import teenSneaker1 from "./teens/teenSneaker1.jpg"
import teenSneaker2 from "./teens/teenSneaker2.jpg"
import teenSneaker3 from "./teens/teenSneaker3.jpg"
import teenSneaker4 from "./teens/teenSneaker4.jpg"

//? Sneaker Highlight
import highlight1 from "./sneaker highlight/highlight1.jpg"
import highlight2 from "./sneaker highlight/highlight2.jpg"
import highlight3 from "./sneaker highlight/highlight3.jpg"
import highlight4 from "./sneaker highlight/highlight4.jpg"
import highlight5 from "./sneaker highlight/highlight5.jpg"
import highlight6 from "./sneaker highlight/highlight6.jpg"
import highlight7 from "./sneaker highlight/highlight7.jpg"
import highlight8 from "./sneaker highlight/highlight8.jpg"

export const collectionSneakers: { [season in Season]: SneakerDetails[] } = {
	summer: [
		{
			image: summerSneaker1,
			model: "Knee-High",
			price: 179.99
		},
		{
			image: summerSneaker2,
			model: "Alcantara",
			price: 299.99
		},
		{
			image: summerSneaker3,
			model: "Indigenous",
			price: 149.99
		},
		{
			image: summerSneaker4,
			model: "Shoeless Grandpa",
			price: 119.99
		}
	],
	autumn: [
		{
			image: autumnSneaker1,
			model: "Free print",
			price: 149.99
		},
		{
			image: autumnSneaker2,
			model: "All the time",
			price: 139.99
		},
		{
			image: autumnSneaker3,
			model: "Tribal",
			price: 109.99
		},
		{
			image: autumnSneaker4,
			model: "Perforated",
			price: 99.99
		}
	],
	winter: [
		{
			image: winterSneaker1,
			model: "High top crochet",
			price: 159.99
		},
		{
			image: winterSneaker2,
			model: "Artisanal chocolate",
			price: 139.99
		},
		{
			image: winterSneaker3,
			model: "Tribal slip-on",
			price: 179.99
		},
		{
			image: winterSneaker4,
			model: "Bold",
			price: 209.99
		}
	],
	spring: [
		{
			image: springSneaker1,
			model: "Graffiti wall",
			price: 109.99
		},
		{
			image: springSneaker2,
			model: "Colored beige",
			price: 99.99
		},
		{
			image: springSneaker3,
			model: "Magazine cover",
			price: 179.99
		},
		{
			image: springSneaker4,
			model: "No rendering",
			price: 119.99
		}
	]
}

export const feminineSneakers: SneakerDetails[] = [
	{
		image: femmeSneaker1,
		model: "Pink",
		price: 159.99
	},
	{
		image: femmeSneaker2,
		model: "Dear",
		price: 119.99
	},
	{
		image: femmeSneaker3,
		model: "Empowered",
		price: 239.99
	},
	{
		image: femmeSneaker4,
		model: "Anteater face",
		price: 179.99
	}
]

export const masculineSneakers: SneakerDetails[] = [
	{
		image: maleSneaker1,
		model: "Simple man",
		price: 199.99
	},
	{
		image: maleSneaker2,
		model: "Fish scale",
		price: 109.99
	},
	{
		image: maleSneaker3,
		model: "Hurry",
		price: 139.99
	},
	{
		image: maleSneaker4,
		model: "Neat",
		price: 249.99
	}
]

export const teensSneakers: SneakerDetails[] = [
	{
		image: teenSneaker1,
		model: "Thick",
		price: 239.99
	},
	{
		image: teenSneaker2,
		model: "Stationer\'s",
		price: 99.99
	},
	{
		image: teenSneaker3,
		model: "Good luck",
		price: 199.99
	},
	{
		image: teenSneaker4,
		model: "Color party",
		price: 139.99
	}
]

export const highlightSneakers: StaticImageData[] = [highlight1, highlight2, highlight3, highlight4, highlight5, highlight6, highlight7, highlight8]
