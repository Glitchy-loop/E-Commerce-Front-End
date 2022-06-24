import React, { useState, useEffect } from "react"
import Container from "../components/Container/Container"
import Section from "../components/Section/Section"
import { Navigation, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import Loader from "../components/Loader/Loader"
import Notification from "../components/Notification/Notification"

const Home = () => {
  const [products, setProducts] = useState()

  const getProducts = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/products`
      )
      const data = await res.json()
      console.log(data)
      return setProducts(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Container>
      <Section>
        {!products && <Loader />}
        {products && products.length === 0 && (
          <Notification>No products found</Notification>
        )}
        {products && products.length > 0 && (
          <Swiper
            style={{ width: "100%" }}
            navigation={true}
            autoplay={true}
            loop={true}
            modules={[Navigation, Autoplay]}
          >
            {products &&
              products.map((product) => (
                <SwiperSlide className='swiper-slide'>
                  {product.title}
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </Section>
    </Container>
  )
}

export default Home
