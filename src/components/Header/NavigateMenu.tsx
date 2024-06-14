//- React
import React from "react"

interface NavigateMenuProps {
	navigateTo: string
	linkText: string
}

export default function NavigateMenu(props: NavigateMenuProps): React.JSX.Element {
	const navigate = (element: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
		event.preventDefault()

		window.history.pushState(null, window.location.pathname)

		document.getElementById(element)?.scrollIntoView()
	}

	return (
		<div className="link-nav">
			<a className="link-to-path" onClick={event => navigate(props.navigateTo, event)}>
				{props.linkText}
			</a>
		</div>
	)
}
