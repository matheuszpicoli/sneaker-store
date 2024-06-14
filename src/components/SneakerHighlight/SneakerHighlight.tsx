//- React
import React from "react"

//- Next
import Image from "next/image"

//- Sneakers
import { highlightSneakers } from "@/api/sneakers"

//- Swiper
import "swiper/css"
import "swiper/css/pagination"

import { register } from "swiper/element/bundle"

import { Swiper, SwiperSlide } from "swiper/react"

import { EffectCoverflow } from "swiper/modules"

register()

export default function SneakerHighlight(): React.JSX.Element {
	return (
		<section className="highlight">
			<h2 className="highlight-subtitle">Diversas opções para você escolher...</h2>
			<aside className="sneaker-highlight">
				<Swiper
					modules={[
						EffectCoverflow
					]}
					effect="coverflow"
					slidesPerView={3}
					pagination={{
						clickable: true
					}}
					autoplay={true}
					navigation
				>
					{highlightSneakers.map((sneaker, index) => (
						<SwiperSlide key={index}>
							<Image
								className="highlight-photo"
								src={sneaker}
								alt={`Destaque ${index + 1}`}
								priority={true}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</aside>
		</section>
	)
}
