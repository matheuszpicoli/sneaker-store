//- Next
import type { StaticImageData } from "next/image"

//- Filter
import { filter } from "./filter"

export type Season = "summer" | "autumn" | "winter" | "spring"
export type Section = "masculine" | "feminine" | "teens" | "collections"

export type Category = {
	ankleHeight: typeof filter.ankleHeight[keyof typeof filter.ankleHeight] | null
	color: typeof filter.color[keyof typeof filter.color] | null
	design: typeof filter.design[keyof typeof filter.design] | null
	material: typeof filter.material[keyof typeof filter.material] | null
	sex: typeof filter.sex[keyof typeof filter.sex] | null
	shoeLace: typeof filter.shoeLace[keyof typeof filter.shoeLace] | null
}

export type SneakerDetails = {
	image: StaticImageData
	model: string
	price: number
	category: Category
	section: Section
}

//? Collections
import autumn1 from "./images/collections/autumn/autumnSneaker1.jpg"
import autumn2 from "./images/collections/autumn/autumnSneaker2.jpg"
import autumn3 from "./images/collections/autumn/autumnSneaker3.jpg"
import autumn4 from "./images/collections/autumn/autumnSneaker4.jpg"

import spring1 from "./images/collections/spring/springSneaker1.jpg"
import spring2 from "./images/collections/spring/springSneaker2.jpg"
import spring3 from "./images/collections/spring/springSneaker3.jpg"
import spring4 from "./images/collections/spring/springSneaker4.jpg"

import summer1 from "./images/collections/summer/summerSneaker1.jpg"
import summer2 from "./images/collections/summer/summerSneaker2.jpg"
import summer3 from "./images/collections/summer/summerSneaker3.jpg"
import summer4 from "./images/collections/summer/summerSneaker4.jpg"

import winter1 from "./images/collections/winter/winterSneaker1.jpg"
import winter2 from "./images/collections/winter/winterSneaker2.jpg"
import winter3 from "./images/collections/winter/winterSneaker3.jpg"
import winter4 from "./images/collections/winter/winterSneaker4.jpg"

//? Femme
import femme1 from "./images/femme/femmeSneaker1.jpg"
import femme2 from "./images/femme/femmeSneaker2.jpg"
import femme3 from "./images/femme/femmeSneaker3.jpg"
import femme4 from "./images/femme/femmeSneaker4.jpg"
import femme5 from "./images/femme/femmeSneaker5.jpg"
import femme6 from "./images/femme/femmeSneaker6.jpg"
import femme7 from "./images/femme/femmeSneaker7.jpg"
import femme8 from "./images/femme/femmeSneaker8.jpg"
import femme9 from "./images/femme/femmeSneaker9.jpg"
import femme10 from "./images/femme/femmeSneaker10.jpg"

//? Male
import male1 from "./images/male/maleSneaker1.jpg"
import male2 from "./images/male/maleSneaker2.jpg"
import male3 from "./images/male/maleSneaker3.jpg"
import male4 from "./images/male/maleSneaker4.jpg"
import male5 from "./images/male/maleSneaker5.jpg"
import male6 from "./images/male/maleSneaker6.jpg"
import male7 from "./images/male/maleSneaker7.jpg"
import male8 from "./images/male/maleSneaker8.jpg"
import male9 from "./images/male/maleSneaker9.jpg"
import male10 from "./images/male/maleSneaker10.jpg"

//? Teens
import teen1 from "./images/teens/teenSneaker1.jpg"
import teen2 from "./images/teens/teenSneaker2.jpg"
import teen3 from "./images/teens/teenSneaker3.jpg"
import teen4 from "./images/teens/teenSneaker4.jpg"
import teen5 from "./images/teens/teenSneaker5.jpg"
import teen6 from "./images/teens/teenSneaker6.jpg"
import teen7 from "./images/teens/teenSneaker7.jpg"
import teen8 from "./images/teens/teenSneaker8.jpg"
import teen9 from "./images/teens/teenSneaker9.jpg"
import teen10 from "./images/teens/teenSneaker10.jpg"

//? Sneaker Highlight
import highlight1 from "./images/sneaker highlight/highlight1.jpg"
import highlight2 from "./images/sneaker highlight/highlight2.jpg"
import highlight3 from "./images/sneaker highlight/highlight3.jpg"
import highlight4 from "./images/sneaker highlight/highlight4.jpg"
import highlight5 from "./images/sneaker highlight/highlight5.jpg"
import highlight6 from "./images/sneaker highlight/highlight6.jpg"
import highlight7 from "./images/sneaker highlight/highlight7.jpg"
import highlight8 from "./images/sneaker highlight/highlight8.jpg"

export const collectionSneakers: { [season in Season]: SneakerDetails[] } = {
	summer: [
		{
			image: summer1, model: "Knee-High", price: 179.99, section: "collections",
			category: {
				ankleHeight: filter.ankleHeight.high,
				color: filter.color.standard,
				design: filter.design.patterned,
				material: filter.material.standard,
				sex: filter.sex.unisex,
				shoeLace: filter.shoeLace.withoutLaces
			}
		},
		{
			image: summer2, model: "Alcantara", price: 299.99, section: "collections",
			category: {
				ankleHeight: filter.ankleHeight.low,
				color: filter.color.colorful,
				design: filter.design.straight,
				material: filter.material.premium,
				sex: filter.sex.unisex,
				shoeLace: filter.shoeLace.withLaces
			}
		},
		{
			image: summer3, model: "Indigenous", price: 149.99, section: "collections",
			category: {
				ankleHeight: filter.ankleHeight.low,
				color: filter.color.colorful,
				design: filter.design.straight,
				material: filter.material.premium,
				sex: filter.sex.feminine,
				shoeLace: filter.shoeLace.withoutLaces
			}
		},
		{
			image: summer4, model: "Shoeless Grandpa", price: 119.99, section: "collections",
			category: {
				ankleHeight: filter.ankleHeight.low,
				color: filter.color.standard,
				design: filter.design.straight,
				material: filter.material.standard,
				sex: filter.sex.masculine,
				shoeLace: filter.shoeLace.withoutLaces
			}
		}
	],
	autumn: [
		{
			image: autumn1, model: "Free print", price: 149.99, section: "collections",
			category: {
				ankleHeight: filter.ankleHeight.medium,
				color: filter.color.colorful,
				design: filter.design.patterned,
				material: filter.material.premium,
				sex: filter.sex.unisex,
				shoeLace: filter.shoeLace.withoutLaces
			}
		},
		{
			image: autumn2, model: "All the time", price: 139.99, section: "collections",
			category: {
				ankleHeight: filter.ankleHeight.low,
				color: filter.color.standard,
				design: filter.design.straight,
				material: filter.material.standard,
				sex: filter.sex.feminine,
				shoeLace: filter.shoeLace.withoutLaces
			}
		},
		{
			image: autumn3, model: "Tribal", price: 109.99, section: "collections",
			category: {
				ankleHeight: filter.ankleHeight.low,
				color: filter.color.standard,
				design: filter.design.straight,
				material: filter.material.premium,
				sex: filter.sex.feminine,
				shoeLace: filter.shoeLace.withoutLaces
			}
		},
		{
			image: autumn4, model: "Perforated", price: 99.99, section: "collections",
			category: {
				ankleHeight: filter.ankleHeight.low,
				color: filter.color.standard,
				design: filter.design.straight,
				material: filter.material.standard,
				sex: filter.sex.unisex,
				shoeLace: filter.shoeLace.withoutLaces
			}
		}
	],
	winter: [
		{
			image: winter1, model: "High top crochet", price: 159.99, section: "collections",
			category: {
				ankleHeight: filter.ankleHeight.high,
				color: filter.color.colorful,
				design: filter.design.patterned,
				material: filter.material.premium,
				sex: filter.sex.feminine,
				shoeLace: filter.shoeLace.withoutLaces
			}
		},
		{
			image: winter2, model: "Artisanal chocolate", price: 139.99, section: "collections",
			category: {
				ankleHeight: filter.ankleHeight.low,
				color: filter.color.standard,
				design: filter.design.straight,
				material: filter.material.standard,
				sex: filter.sex.feminine,
				shoeLace: filter.shoeLace.withoutLaces
			}
		},
		{
			image: winter3, model: "Tribal slip-on", price: 179.99, section: "collections",
			category: {
				ankleHeight: filter.ankleHeight.low,
				color: filter.color.standard,
				design: filter.design.patterned,
				material: filter.material.standard,
				sex: filter.sex.masculine,
				shoeLace: filter.shoeLace.withoutLaces
			}
		},
		{
			image: winter4, model: "Bold", price: 209.99, section: "collections",
			category: {
				ankleHeight: filter.ankleHeight.medium,
				color: filter.color.standard,
				design: filter.design.patterned,
				material: filter.material.premium,
				sex: filter.sex.unisex,
				shoeLace: filter.shoeLace.withoutLaces
			}
		}
	],
	spring: [
		{
			image: spring1, model: "Graffiti wall", price: 109.99, section: "collections",
			category: {
				ankleHeight: filter.ankleHeight.low,
				color: filter.color.colorful,
				design: filter.design.patterned,
				material: filter.material.standard,
				sex: filter.sex.feminine,
				shoeLace: filter.shoeLace.withoutLaces
			}
		},
		{
			image: spring2, model: "Colored beige", price: 99.99, section: "collections",
			category: {
				ankleHeight: filter.ankleHeight.low,
				color: filter.color.colorful,
				design: filter.design.straight,
				material: filter.material.premium,
				sex: filter.sex.feminine,
				shoeLace: filter.shoeLace.withLaces
			}
		},
		{
			image: spring3, model: "Magazine cover", price: 179.99, section: "collections",
			category: {
				ankleHeight: filter.ankleHeight.medium,
				color: filter.color.standard,
				design: filter.design.patterned,
				material: filter.material.premium,
				sex: filter.sex.unisex,
				shoeLace: filter.shoeLace.withoutLaces
			}
		},
		{
			image: spring4, model: "No rendering", price: 119.99, section: "collections",
			category: {
				ankleHeight: filter.ankleHeight.low,
				color: filter.color.standard,
				design: filter.design.patterned,
				material: filter.material.standard,
				sex: filter.sex.feminine,
				shoeLace: filter.shoeLace.withoutLaces
			}
		}
	]
}

export const feminineSneakers: SneakerDetails[] = [
	{
		image: femme1, model: "Pink", price: 159.99, section: "feminine",
		category: {
			ankleHeight: filter.ankleHeight.medium,
			color: filter.color.standard,
			design: filter.design.straight,
			material: filter.material.standard,
			sex: filter.sex.feminine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: femme2, model: "Dear", price: 109.99, section: "feminine",
		category: {
			ankleHeight: filter.ankleHeight.low,
			color: filter.color.standard,
			design: filter.design.straight,
			material: filter.material.standard,
			sex: filter.sex.feminine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: femme3, model: "Empowered", price: 239.99, section: "feminine",
		category: {
			ankleHeight: filter.ankleHeight.medium,
			color: filter.color.standard,
			design: filter.design.straight,
			material: filter.material.standard,
			sex: filter.sex.feminine,
			shoeLace: filter.shoeLace.withLaces
		}
	},
	{
		image: femme4, model: "Anteater face", price: 179.99, section: "feminine",
		category: {
			ankleHeight: filter.ankleHeight.low,
			color: filter.color.standard,
			design: filter.design.straight,
			material: filter.material.premium,
			sex: filter.sex.feminine,
			shoeLace: filter.shoeLace.withLaces
		}
	},
	{
		image: femme5, model: "Abstract", price: 119.99, section: "feminine",
		category: {
			ankleHeight: filter.ankleHeight.low,
			color: filter.color.colorful,
			design: filter.design.straight,
			material: filter.material.premium,
			sex: filter.sex.feminine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: femme6, model: "Little girl", price: 159.99, section: "feminine",
		category: {
			ankleHeight: filter.ankleHeight.high,
			color: filter.color.colorful,
			design: filter.design.patterned,
			material: filter.material.standard,
			sex: filter.sex.feminine,
			shoeLace: filter.shoeLace.withLaces
		}
	},
	{
		image: femme7, model: "Simple woman", price: 139.99, section: "feminine",
		category: {
			ankleHeight: filter.ankleHeight.low,
			color: filter.color.standard,
			design: filter.design.straight,
			material: filter.material.standard,
			sex: filter.sex.feminine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: femme8, model: "Flowery", price: 179.99, section: "feminine",
		category: {
			ankleHeight: filter.ankleHeight.medium,
			color: filter.color.colorful,
			design: filter.design.patterned,
			material: filter.material.standard,
			sex: filter.sex.feminine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: femme9, model: "Runner 3", price: 249.99, section: "feminine",
		category: {
			ankleHeight: filter.ankleHeight.low,
			color: filter.color.colorful,
			design: filter.design.straight,
			material: filter.material.premium,
			sex: filter.sex.feminine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: femme10, model: "Whatever", price: 99.99, section: "feminine",
		category: {
			ankleHeight: filter.ankleHeight.low,
			color: filter.color.standard,
			design: filter.design.straight,
			material: filter.material.standard,
			sex: filter.sex.feminine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	}
]

export const masculineSneakers: SneakerDetails[] = [
	{
		image: male1, model: "Simple man", price: 169.99, section: "masculine",
		category: {
			ankleHeight: filter.ankleHeight.low,
			color: filter.color.standard,
			design: filter.design.straight,
			material: filter.material.premium,
			sex: filter.sex.masculine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: male2, model: "Fish scale", price: 149.99, section: "masculine",
		category: {
			ankleHeight: filter.ankleHeight.medium,
			color: filter.color.standard,
			design: filter.design.straight,
			material: filter.material.premium,
			sex: filter.sex.masculine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: male3, model: "Hurry", price: 139.99, section: "masculine",
		category: {
			ankleHeight: filter.ankleHeight.medium,
			color: filter.color.standard,
			design: filter.design.straight,
			material: filter.material.premium,
			sex: filter.sex.masculine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: male4, model: "Neat", price: 249.99, section: "masculine",
		category: {
			ankleHeight: filter.ankleHeight.low,
			color: filter.color.standard,
			design: filter.design.straight,
			material: filter.material.standard,
			sex: filter.sex.masculine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: male5, model: "Manager", price: 189.99, section: "masculine",
		category: {
			ankleHeight: filter.ankleHeight.low,
			color: filter.color.standard,
			design: filter.design.straight,
			material: filter.material.standard,
			sex: filter.sex.masculine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: male6, model: "Basic modern", price: 219.99, section: "masculine",
		category: {
			ankleHeight: filter.ankleHeight.low,
			color: filter.color.standard,
			design: filter.design.straight,
			material: filter.material.premium,
			sex: filter.sex.masculine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: male7, model: "Ready to work", price: 99.99, section: "masculine",
		category: {
			ankleHeight: filter.ankleHeight.low,
			color: filter.color.standard,
			design: filter.design.straight,
			material: filter.material.standard,
			sex: filter.sex.masculine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: male8, model: "Gang", price: 119.99, section: "masculine",
		category: {
			ankleHeight: filter.ankleHeight.low,
			color: filter.color.colorful,
			design: filter.design.straight,
			material: filter.material.standard,
			sex: filter.sex.masculine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: male9, model: "Tall black", price: 229.99, section: "masculine",
		category: {
			ankleHeight: filter.ankleHeight.high,
			color: filter.color.standard,
			design: filter.design.straight,
			material: filter.material.premium,
			sex: filter.sex.masculine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: male10, model: "Cattle owner", price: 209.99, section: "masculine",
		category: {
			ankleHeight: filter.ankleHeight.medium,
			color: filter.color.standard,
			design: filter.design.straight,
			material: filter.material.standard,
			sex: filter.sex.masculine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	}
]

export const teensSneakers: SneakerDetails[] = [
	{
		image: teen1, model: "Thick", price: 239.99, section: "teens",
		category: {
			ankleHeight: filter.ankleHeight.high,
			color: filter.color.colorful,
			design: filter.design.straight,
			material: filter.material.premium,
			sex: filter.sex.feminine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: teen2, model: "Stationer\"s", price: 99.99, section: "teens",
		category: {
			ankleHeight: filter.ankleHeight.medium,
			color: filter.color.colorful,
			design: filter.design.straight,
			material: filter.material.standard,
			sex: filter.sex.unisex,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: teen3, model: "Good luck", price: 199.99, section: "teens",
		category: {
			ankleHeight: filter.ankleHeight.high,
			color: filter.color.colorful,
			design: filter.design.straight,
			material: filter.material.premium,
			sex: filter.sex.masculine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: teen4, model: "Color party", price: 139.99, section: "teens",
		category: {
			ankleHeight: filter.ankleHeight.low,
			color: filter.color.colorful,
			design: filter.design.straight,
			material: filter.material.standard,
			sex: filter.sex.feminine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: teen5, model: "Famous gray", price: 209.99, section: "teens",
		category: {
			ankleHeight: filter.ankleHeight.medium,
			color: filter.color.standard,
			design: filter.design.straight,
			material: filter.material.premium,
			sex: filter.sex.masculine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: teen6, model: "Behaved", price: 179.99, section: "teens",
		category: {
			ankleHeight: filter.ankleHeight.medium,
			color: filter.color.colorful,
			design: filter.design.straight,
			material: filter.material.premium,
			sex: filter.sex.feminine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: teen7, model: "Criminal hive", price: 219.99, section: "teens",
		category: {
			ankleHeight: filter.ankleHeight.low,
			color: filter.color.standard,
			design: filter.design.straight,
			material: filter.material.premium,
			sex: filter.sex.masculine,
			shoeLace: filter.shoeLace.withLaces
		}
	},
	{
		image: teen8, model: "Like a spider", price: 159.99, section: "teens",
		category: {
			ankleHeight: filter.ankleHeight.medium,
			color: filter.color.standard,
			design: filter.design.straight,
			material: filter.material.premium,
			sex: filter.sex.masculine,
			shoeLace: filter.shoeLace.withoutLaces
		}
	},
	{
		image: teen9, model: "Rainbow", price: 109.99, section: "teens",
		category: {
			ankleHeight: filter.ankleHeight.low,
			color: filter.color.standard,
			design: filter.design.straight,
			material: filter.material.standard,
			sex: filter.sex.unisex,
			shoeLace: filter.shoeLace.withLaces
		}
	},
	{
		image: teen10, model: "Straight talk", price: 119.99, section: "teens",
		category: {
			ankleHeight: filter.ankleHeight.high,
			color: filter.color.standard,
			design: filter.design.straight,
			material: filter.material.standard,
			sex: filter.sex.unisex,
			shoeLace: filter.shoeLace.withLaces
		}
	}
]

export const highlightSneakers: StaticImageData[] = [highlight1, highlight2, highlight3, highlight4, highlight5, highlight6, highlight7, highlight8]
