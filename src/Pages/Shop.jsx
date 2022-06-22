import React, { useState, useEffect } from "react"
import Container from "../components/Container/Container"
import Loader from "../components/Loader/Loader"
import Notification from "../components/Notification/Notification"
import ProductList from "../components/ProductList/ProductList"
import Section from "../components/Section/Section"
import Title from "../components/Title/Title"

const Shop = () => {
  const [products, setProducts] = useState()
  const [error, setError] = useState()

  const getProducts = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/products`
      )
      const data = await res.json()

      if (data.length === 0) {
        setError("No products found.")
      }

      // console.log(data)
      return setProducts(data)
    } catch (err) {
      return setError(err.message)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Container>
      <Section>
        <Title title='Shop' />
        {error && <Notification>{error}</Notification>}
        {!products && <Loader />}
        {products && products.length > 0 && <ProductList products={products} />}
      </Section>
    </Container>
  )
}

export default Shop
