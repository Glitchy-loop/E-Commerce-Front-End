import React, { useState, useEffect } from "react"
import Container from "../components/Container/Container"
import Section from "../components/Section/Section"

import Loader from "../components/Loader/Loader"
import Notification from "../components/Notification/Notification"
import Slider from "../components/Slider/Slider"
import Footer from "../components/Footer/Footer"

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
    <>
      <Container>
        <Section>
          {!products && <Loader />}
          {products && products.length === 0 && (
            <Notification>No products found</Notification>
          )}
          {products && products.length > 0 && <Slider items={products} />}
        </Section>
      </Container>
      <Footer />
    </>
  )
}

export default Home
