import React from "react"

interface SectionProps {
	reference: "masculine" | "feminine" | "teens" | "collections"
}

export default function Section<T extends SectionProps>(props: T): React.JSX.Element {
	return (
		<React.Fragment>
			{props.reference === "masculine" && (
				<section id="masculine" className="masculine">
				</section>
			)}
			{props.reference === "feminine" && (
				<section id="feminine" className="feminine">
				</section>
			)}
			{props.reference === "teens" && (
				<section id="teens" className="teens">
				</section>
			)}
			{props.reference === "collections" && (
				<section id="collections" className="collections">
				</section>
			)}
		</React.Fragment>
	)
}
