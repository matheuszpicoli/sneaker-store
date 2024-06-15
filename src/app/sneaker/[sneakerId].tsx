"use client"

//- React
import React from "react"

//- Next
import { useSearchParams } from "next/navigation"

export default function SneakerProperties() {
	const searchParams = useSearchParams()

	const params = searchParams?.get("sneakerId")

	return (
		<React.Fragment>
			<h1>Id: {params}</h1>
		</React.Fragment>
	)
}
