//- React
import React from "react"

//- API
import { listModel } from "@/api/lists"

interface ListProps {
	title: string,
	model: "institutional" | "help" | "salesCenter" | "relationshipCenter"
}

export default function List(props: ListProps): React.JSX.Element {
	return (
		<div className="list">
			<p className="list-title">{props.title}</p>
			{listModel[props.model].map((item, index) => (
				<ul key={index} className="list-items">
					<li className="list-item">{item}</li>
				</ul>
			))}
		</div>
	)
}
