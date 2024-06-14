//- React
import React from "react"

//- Icons
import * as Icon from "@/icons/icons"

//- Components
import AdditionalInformation from "./AdditionalInformation"
import List from "./List"
import SocialMedia from "./SocialMedia"

export default function Footer(): React.JSX.Element {
	return (
		<footer>
			<section className="additional-information">
				<AdditionalInformation
					icon={Icon.Truck}
					title="Frete grátis"
					subtitle="Em produtos selecionados"
				/>
				<AdditionalInformation
					icon={Icon.Stopwatch}
					title="Entrega rápida"
					subtitle="A partir de 2 dias úteis"
				/>
				<AdditionalInformation
					icon={Icon.CreditCard}
					title="Em até 10x sem juros"
					subtitle="No cartão de crédito"
				/>
			</section>

			<hr className="footer-divider" />

			<section className="lists">
				<List title="Institucional" model="institutional" />
				<List title="Ajuda" model="help" />
				<List title="Central de Vendas" model="salesCenter" />
				<List title="Central de Relacionamento" model="relationshipCenter" />

				<aside className="social-medias">
					<SocialMedia icon={Icon.Facebook} />
					<SocialMedia icon={Icon.Instagram} />
					<SocialMedia icon={Icon.X} />
					<SocialMedia icon={Icon.Youtube} />
				</aside>
			</section>
		</footer>
	)
}
