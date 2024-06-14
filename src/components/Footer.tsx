//- React
import React from "react"

//- Types
import type { IconType } from "react-icons"

//- Icons
import * as Icon from "../icons/icons"

//- List
import { listModel } from "@/api/lists"

interface AdditionalInformationProps {
	icon: IconType
	title: string
	subtitle: string
}

function AdditionalInformation(props: AdditionalInformationProps): React.JSX.Element {
	return (
		<div className="additional-information-item">
			<props.icon className="additional-information-icon" />
			<p className="additional-information-text-title">{props.title}</p>
			<p className="additional-information-text-subtitle">{props.subtitle}</p>
		</div>
	)
}

interface ListProps {
	title: string,
	model: "institutional" | "help" | "salesCenter" | "relationshipCenter"
}

function List(props: ListProps): React.JSX.Element {
	return (
		<div className="list">
			<React.Fragment>
				<p className="list-title">{props.title}</p>
				{listModel[props.model].map((item, index) => (
					<ul key={index} className="list-items">
						<li className="list-item">{item}</li>
					</ul>
				))}
			</React.Fragment>
		</div>
	)
}

interface SocialMediaProps {
	icon: IconType
}

function SocialMedia(props: SocialMediaProps): React.JSX.Element {
	return (
		<div className="social-media">
			<props.icon className="social-media-icon" />
		</div>
	)
}

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
