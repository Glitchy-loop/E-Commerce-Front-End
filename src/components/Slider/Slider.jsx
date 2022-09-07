import React from "react"
import { Navigation, Autoplay } from "swiper"
import { SwiperSlide } from "swiper/react"
import "./Slider.css"
import * as S from "./Slider.styles"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const Slider = ({ items }) => {
  return (
    <S.Slider
      navigation={true}
      autoplay={true}
      loop={true}
      modules={[Navigation, Autoplay]}
    >
      {items &&
        items.map((item) => (
          <SwiperSlide key={item.title} className='swiper-slide'>
            <S.Left>
              <S.StyledLink to={`/product/${item.id}`}>
                <S.ProductTitle>{item.title}</S.ProductTitle>
              </S.StyledLink>
              <S.ProductDescription>{item.description}</S.ProductDescription>
            </S.Left>
            <S.Right>
              <img src={item.img} alt={item.title} />
            </S.Right>
          </SwiperSlide>
        ))}
    </S.Slider>
  )
}

export default Slider
