import React from "react"
import PropTypes from "prop-types"
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
              <S.ProductTitle>{item.title}</S.ProductTitle>
              <S.ProductDescription>{item.description}</S.ProductDescription>
            </S.Left>
            <S.Right>
              <img
                src={`${process.env.REACT_APP_S3_BUCKET_URL}/${item.img}`}
                alt={item.title}
              />
            </S.Right>
          </SwiperSlide>
        ))}
    </S.Slider>
  )
}

Slider.propTypes = {}

export default Slider
