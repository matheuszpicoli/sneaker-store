const filterValues = {
	sex: ["unisex", "masculine", "feminine"],
	design: ["straight", "patterned"],
	ankleHeight: ["low", "medium", "high"],
	shoelace: ["withLaces", "withoutLaces"],
	color: ["standard", "colorful"],
	material: ["standard", "premium"]
}

export const filter = {
	sex: {
		/** @description Ambos os sexos @type string */
		unisex: filterValues.sex[0],
		/** @description Masculino @type string */
		masculine: filterValues.sex[1],
		/** @description Feminino @type string */
		feminine: filterValues.sex[2]
	},
	design: {
		/** @description Liso @type string */
		straight: filterValues.design[0],
		/** @description Estampado @type string */
		patterned: filterValues.design[1]
	},
	ankleHeight: {
		/** @description Cano baixo @type string */
		low: filterValues.ankleHeight[0],
		/** @description Cano médio @type string */
		medium: filterValues.ankleHeight[1],
		/** @description Cano alto @type string */
		high: filterValues.ankleHeight[2]
	},
	shoeLace: {
		/** @description Com cadarço @type string */
		withLaces: filterValues.shoelace[0],
		/** @description Sem cadarço @type string */
		withoutLaces: filterValues.shoelace[1]
	},
	color: {
		/** @description Liso (padrão) @type string */
		standard: filterValues.color[0],
		/** @description Colorido @type string */
		colorful: filterValues.color[1]
	},
	material: {
		/** @description Padrão @type string */
		standard: filterValues.material[0],
		/** @description Premium @type string */
		premium: filterValues.material[1]
	}
}
