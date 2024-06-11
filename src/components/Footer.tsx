//- React
import React from "react"

//- Types
import type { IconType } from "react-icons"

//- Icons
import * as Icon from "../icons/icons"

interface AdditionalInformationProps {
	icon: IconType
	title: string
	subtitle: string
}

function AdditionalInformation<T extends AdditionalInformationProps>(props: T): React.JSX.Element {
	return (
		<div className="additional-information-item">
			<props.icon className="additional-information-icon" />
			<p className="additional-information-text-title">{props.title}</p>
			<p className="additional-information-text-subtitle">{props.subtitle}</p>
		</div>
	)
}

interface ListProps {
	model: "institutional" | "help" | "sales center" | "relationship center"
}

function List<T extends ListProps>(props: T): React.JSX.Element {

	const maskForCellphone = (cellphone: number): string => {
		const mask = new RegExp(/^([0-9]{2})([0-9]{4})([0-9]{4})$/)

		return cellphone.toString().replace(mask, "($1) $2-$3")
	}

	return (
		<div className="list">
			{props.model === "institutional" && (
				<React.Fragment>
					<p className="list-title">Institucional</p>
					<ul className="list-items">
						<li className="list-item">Sobre a MP Sneakers</li>
						<li className="list-item">Política de Privacidade</li>
						<li className="list-item">Trabalhe Conosco</li>
						<li className="list-item">Programa de Afiliados</li>
						<li className="list-item">Soluções Corporativas</li>
						<li className="list-item">Regulamentos</li>
						<li className="list-item">Relatórios</li>
						<li className="list-item">Programa de Integridade</li>
						<li className="list-item">Guia MP Sneakers</li>
						<li className="list-item">Blog</li>
						<li className="list-item">Black Friday</li>
					</ul>
				</React.Fragment>
			)}
			{props.model === "help" && (
				<React.Fragment>
					<p className="list-title">Ajuda</p>
					<ul className="list-items">
						<li className="list-item">Trocas e Devoluções</li>
						<li className="list-item">Entregas</li>
						<li className="list-item">Minha Conta</li>
						<li className="list-item">Meus Pedidos</li>
						<li className="list-item">Pagamentos</li>
						<li className="list-item">Cancelamentos</li>
						<li className="list-item">MP Card</li>
						<li className="list-item">Segurança e Privacidade</li>
						<li className="list-item">Como Comprar</li>
						<li className="list-item">Acessibilidade</li>
					</ul>
				</React.Fragment>
			)}
			{props.model === "sales center" && (
				<React.Fragment>
					<p className="list-title">Central de Vendas</p>
					<ul className="list-items">
						<li className="list-item">{maskForCellphone(2122287488)}</li>
						<li className="list-item">{maskForCellphone(2122175443)}</li>
					</ul>
				</React.Fragment>
			)}
			{props.model === "relationship center" && (
				<React.Fragment>
					<p className="list-title">Central de relacionamento</p>
					<ul className="list-items">
						<li className="list-item">Tire suas dúvidas</li>
					</ul>
				</React.Fragment>
			)}
		</div>
	)
}

interface SocialMediaProps {
	icon: IconType
}

function SocialMedia<T extends SocialMediaProps>(props: T): React.JSX.Element {
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
				<List model="institutional" />
				<List model="help" />
				<List model="sales center" />
				<List model="relationship center" />

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
