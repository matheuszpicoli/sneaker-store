//- Next
import type { StaticImageData } from "next/image"

//- Images
import * as Sneaker from "./images"

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
	id: number
	image: StaticImageData
	model: string
	price: number
	category: Category
	section: Section
}

export const collectionSneakers: { [season in Season]: SneakerDetails[] } = {
	summer: [
		{
			id: 1,
			image: Sneaker.summer1,
			model: "Knee-High",
			price: 179.99,
			section: "collections",
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
			id: 2,
			image: Sneaker.summer2,
			model: "Alcantara",
			price: 299.99,
			section: "collections",
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
			id: 3,
			image: Sneaker.summer3,
			model: "Indigenous",
			price: 149.99,
			section: "collections",
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
			id: 4,
			image: Sneaker.summer4,
			model: "Shoeless Grandpa",
			price: 119.99,
			section: "collections",
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
			id: 5,
			image: Sneaker.autumn1,
			model: "Free print",
			price: 149.99,
			section: "collections",
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
			id: 6,
			image: Sneaker.autumn2,
			model: "All the time",
			price: 139.99,
			section: "collections",
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
			id: 7,
			image: Sneaker.autumn3,
			model: "Tribal",
			price: 109.99,
			section: "collections",
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
			id: 8,
			image: Sneaker.autumn4,
			model: "Perforated",
			price: 99.99,
			section: "collections",
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
			id: 9,
			image: Sneaker.winter1,
			model: "High top crochet",
			price: 159.99,
			section: "collections",
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
			id: 10,
			image: Sneaker.winter2,
			model: "Artisanal chocolate",
			price: 139.99,
			section: "collections",
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
			id: 11,
			image: Sneaker.winter3,
			model: "Tribal slip-on",
			price: 179.99,
			section: "collections",
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
			id: 12,
			image: Sneaker.winter4,
			model: "Bold",
			price: 269.99,
			section: "collections",
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
			id: 13,
			image: Sneaker.spring1,
			model: "Graffiti wall",
			price: 109.99,
			section: "collections",
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
			id: 14,
			image: Sneaker.spring2,
			model: "Colored beige",
			price: 99.99,
			section: "collections",
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
			id: 15,
			image: Sneaker.spring3,
			model: "Magazine cover",
			price: 179.99,
			section: "collections",
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
			id: 16,
			image: Sneaker.spring4,
			model: "No rendering",
			price: 119.99,
			section: "collections",
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
		id: 17,
		image: Sneaker.femme1,
		model: "Pink",
		price: 159.99,
		section: "feminine",
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
		id: 18,
		image: Sneaker.femme2,
		model: "Dear",
		price: 109.99,
		section: "feminine",
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
		id: 19,
		image: Sneaker.femme3,
		model: "Empowered",
		price: 239.99,
		section: "feminine",
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
		id: 20,
		image: Sneaker.femme4,
		model: "Anteater face",
		price: 179.99,
		section: "feminine",
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
		id: 21,
		image: Sneaker.femme5,
		model: "Abstract",
		price: 119.99,
		section: "feminine",
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
		id: 22,
		image: Sneaker.femme6,
		model: "Little girl",
		price: 159.99,
		section: "feminine",
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
		id: 23,
		image: Sneaker.femme7,
		model: "Simple woman",
		price: 139.99,
		section: "feminine",
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
		id: 24,
		image: Sneaker.femme8,
		model: "Flowery",
		price: 179.99,
		section: "feminine",
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
		id: 25,
		image: Sneaker.femme9,
		model: "Runner 3",
		price: 249.99,
		section: "feminine",
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
		id: 26,
		image: Sneaker.femme10,
		model: "Whatever",
		price: 99.99,
		section: "feminine",
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
		id: 27,
		image: Sneaker.male1,
		model: "Simple man",
		price: 169.99,
		section: "masculine",
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
		id: 28,
		image: Sneaker.male2,
		model: "Fish scale",
		price: 149.99,
		section: "masculine",
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
		id: 29,
		image: Sneaker.male3,
		model: "Hurry",
		price: 139.99,
		section: "masculine",
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
		id: 30,
		image: Sneaker.male4,
		model: "Neat",
		price: 249.99,
		section: "masculine",
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
		id: 31,
		image: Sneaker.male5,
		model: "Manager",
		price: 189.99,
		section: "masculine",
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
		id: 32,
		image: Sneaker.male6,
		model: "Basic modern",
		price: 219.99,
		section: "masculine",
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
		id: 33,
		image: Sneaker.male7,
		model: "Ready to work",
		price: 99.99,
		section: "masculine",
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
		id: 34,
		image: Sneaker.male8,
		model: "Gang",
		price: 119.99,
		section: "masculine",
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
		id: 35,
		image: Sneaker.male9,
		model: "Tall black",
		price: 229.99,
		section: "masculine",
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
		id: 36,
		image: Sneaker.male10,
		model: "Cattle owner",
		price: 209.99,
		section: "masculine",
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
		id: 37,
		image: Sneaker.teen1,
		model: "Thick",
		price: 239.99,
		section: "teens",
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
		id: 38,
		image: Sneaker.teen2,
		model: "Stationer\'s",
		price: 99.99,
		section: "teens",
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
		id: 39,
		image: Sneaker.teen3,
		model: "Good luck",
		price: 199.99,
		section: "teens",
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
		id: 40,
		image: Sneaker.teen4,
		model: "Color party",
		price: 139.99,
		section: "teens",
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
		id: 41,
		image: Sneaker.teen5,
		model: "Famous gray",
		price: 209.99,
		section: "teens",
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
		id: 42,
		image: Sneaker.teen6,
		model: "Behaved",
		price: 179.99,
		section: "teens",
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
		id: 43,
		image: Sneaker.teen7,
		model: "Criminal hive",
		price: 219.99,
		section: "teens",
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
		id: 44,
		image: Sneaker.teen8,
		model: "Like a spider",
		price: 159.99,
		section: "teens",
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
		id: 45,
		image: Sneaker.teen9,
		model: "Rainbow",
		price: 109.99,
		section: "teens",
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
		id: 46,
		image: Sneaker.teen10,
		model: "Straight talk",
		price: 119.99,
		section: "teens",
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

export const highlightSneakers: StaticImageData[] = [
	Sneaker.highlight1,
	Sneaker.highlight2,
	Sneaker.highlight3,
	Sneaker.highlight4,
	Sneaker.highlight5,
	Sneaker.highlight6,
	Sneaker.highlight7,
	Sneaker.highlight8
]
