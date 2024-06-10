//- Next
import type { StaticImageData } from "next/image"

type Season = "summer" | "autumn" | "winter" | "spring"

type SneakerDetails = {
	image: StaticImageData
	model: string
	price: number
	discount?: (value: number) => number
}

//? Collections
import autumn1 from "./collections/autumn/autumnSneaker1.jpg"
import autumn2 from "./collections/autumn/autumnSneaker2.jpg"
import autumn3 from "./collections/autumn/autumnSneaker3.jpg"
import autumn4 from "./collections/autumn/autumnSneaker4.jpg"

import spring1 from "./collections/spring/springSneaker1.jpg"
import spring2 from "./collections/spring/springSneaker2.jpg"
import spring3 from "./collections/spring/springSneaker3.jpg"
import spring4 from "./collections/spring/springSneaker4.jpg"

import summer1 from "./collections/summer/summerSneaker1.jpg"
import summer2 from "./collections/summer/summerSneaker2.jpg"
import summer3 from "./collections/summer/summerSneaker3.jpg"
import summer4 from "./collections/summer/summerSneaker4.jpg"

import winter1 from "./collections/winter/winterSneaker1.jpg"
import winter2 from "./collections/winter/winterSneaker2.jpg"
import winter3 from "./collections/winter/winterSneaker3.jpg"
import winter4 from "./collections/winter/winterSneaker4.jpg"

//? Femme
import femme1 from "./femme/femmeSneaker1.jpg"
import femme2 from "./femme/femmeSneaker2.jpg"
import femme3 from "./femme/femmeSneaker3.jpg"
import femme4 from "./femme/femmeSneaker4.jpg"
import femme5 from "./femme/femmeSneaker5.jpg"
import femme6 from "./femme/femmeSneaker6.jpg"
import femme7 from "./femme/femmeSneaker7.jpg"
import femme8 from "./femme/femmeSneaker8.jpg"
import femme9 from "./femme/femmeSneaker9.jpg"
import femme10 from "./femme/femmeSneaker10.jpg"

//? Male
import male1 from "./male/maleSneaker1.jpg"
import male2 from "./male/maleSneaker2.jpg"
import male3 from "./male/maleSneaker3.jpg"
import male4 from "./male/maleSneaker4.jpg"
import male5 from "./male/maleSneaker5.jpg"
import male6 from "./male/maleSneaker6.jpg"
import male7 from "./male/maleSneaker7.jpg"
import male8 from "./male/maleSneaker8.jpg"
import male9 from "./male/maleSneaker9.jpg"
import male10 from "./male/maleSneaker10.jpg"

//? Teens
import teen1 from "./teens/teenSneaker1.jpg"
import teen2 from "./teens/teenSneaker2.jpg"
import teen3 from "./teens/teenSneaker3.jpg"
import teen4 from "./teens/teenSneaker4.jpg"
import teen5 from "./teens/teenSneaker5.jpg"
import teen6 from "./teens/teenSneaker6.jpg"
import teen7 from "./teens/teenSneaker7.jpg"
import teen8 from "./teens/teenSneaker8.jpg"
import teen9 from "./teens/teenSneaker9.jpg"
import teen10 from "./teens/teenSneaker10.jpg"

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
			image: summer1,
			model: "Knee-High",
			price: 179.99
		},
		{
			image: summer2,
			model: "Alcantara",
			price: 299.99
		},
		{
			image: summer3,
			model: "Indigenous",
			price: 149.99
		},
		{
			image: summer4,
			model: "Shoeless Grandpa",
			price: 119.99
		}
	],
	autumn: [
		{
			image: autumn1,
			model: "Free print",
			price: 149.99
		},
		{
			image: autumn2,
			model: "All the time",
			price: 139.99
		},
		{
			image: autumn3,
			model: "Tribal",
			price: 109.99
		},
		{
			image: autumn4,
			model: "Perforated",
			price: 99.99
		}
	],
	winter: [
		{
			image: winter1,
			model: "High top crochet",
			price: 159.99
		},
		{
			image: winter2,
			model: "Artisanal chocolate",
			price: 139.99
		},
		{
			image: winter3,
			model: "Tribal slip-on",
			price: 179.99
		},
		{
			image: winter4,
			model: "Bold",
			price: 209.99
		}
	],
	spring: [
		{
			image: spring1,
			model: "Graffiti wall",
			price: 109.99
		},
		{
			image: spring2,
			model: "Colored beige",
			price: 99.99
		},
		{
			image: spring3,
			model: "Magazine cover",
			price: 179.99
		},
		{
			image: spring4,
			model: "No rendering",
			price: 119.99
		}
	]
}

export const feminineSneakers: SneakerDetails[] = [
	{
		image: femme1,
		model: "Pink",
		price: 159.99
	},
	{
		image: femme2,
		model: "Dear",
		price: 109.99
	},
	{
		image: femme3,
		model: "Empowered",
		price: 239.99
	},
	{
		image: femme4,
		model: "Anteater face",
		price: 179.99
	},
	{
		image: femme5,
		model: "Abstract",
		price: 119.99
	},
	{
		image: femme6,
		model: "Little girl",
		price: 159.99
	},
	{
		image: femme7,
		model: "Simple woman",
		price: 139.99
	},
	{
		image: femme8,
		model: "Flowery",
		price: 179.99
	},
	{
		image: femme9,
		model: "Runner 3",
		price: 249.99
	},
	{
		image: femme10,
		model: "Whatever",
		price: 99.99
	}
]

export const masculineSneakers: SneakerDetails[] = [
	{
		image: male1,
		model: "Simple man",
		price: 169.99
	},
	{
		image: male2,
		model: "Fish scale",
		price: 149.99
	},
	{
		image: male3,
		model: "Hurry",
		price: 139.99
	},
	{
		image: male4,
		model: "Neat",
		price: 249.99
	},
	{
		image: male5,
		model: "Manager",
		price: 189.99
	},
	{
		image: male6,
		model: "Basic modern",
		price: 219.99
	},
	{
		image: male7,
		model: "Ready to work",
		price: 99.99
	},
	{
		image: male8,
		model: "Gang",
		price: 119.99
	},
	{
		image: male9,
		model: "Tall black",
		price: 199.99
	},
	{
		image: male10,
		model: "Cattle owner",
		price: 209.99
	}
]

export const teensSneakers: SneakerDetails[] = [
	{
		image: teen1,
		model: "Thick",
		price: 239.99
	},
	{
		image: teen2,
		model: "Stationer\'s",
		price: 99.99
	},
	{
		image: teen3,
		model: "Good luck",
		price: 199.99
	},
	{
		image: teen4,
		model: "Color party",
		price: 139.99
	},
	{
		image: teen5,
		model: "Famous gray",
		price: 209.99
	},
	{
		image: teen6,
		model: "Behaved",
		price: 179.99
	},
	{
		image: teen7,
		model: "Criminal hive",
		price: 219.99
	},
	{
		image: teen8,
		model: "Like a spider",
		price: 159.99
	},
	{
		image: teen9,
		model: "Rainbow",
		price: 109.99
	},
	{
		image: teen10,
		model: "Straight talk",
		price: 119.99
	}
]

export const highlightSneakers: StaticImageData[] = [highlight1, highlight2, highlight3, highlight4, highlight5, highlight6, highlight7, highlight8]
