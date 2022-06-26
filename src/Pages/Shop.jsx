import React, { useState, useEffect } from "react"
import Container from "../components/Container/Container"
import Loader from "../components/Loader/Loader"
import Notification from "../components/Notification/Notification"
import ProductList from "../components/ProductList/ProductList"
import SearchInput from "../components/SearchInput/SearchInput"
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

  // Search input handler
  const searchProducts = async (e) => {
    let searchQuery = e.toLowerCase().trim()
    if (searchQuery.length !== 0) {
      getProductsBySearchQuery(searchQuery)
    } else {
      getProducts()
      setError()
    }
  }

  // Fetch products by search query
  const getProductsBySearchQuery = async (query) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/products/search/${query}`
      )
      const data = await res.json()

      if (data.err) {
        setError(data.err)
      }

      if (data.length > 0) {
        setError(`Search results with: '${query}'`)
      }

      setProducts(data)
    } catch (err) {
      return setError(err.msg)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Container>
        <Section>
          <Title title='Shop' />
          <SearchInput
            placeholder='Product title or category...'
            handleSearch={(e) => searchProducts(e)}
          />
          {error && <Notification>{error}</Notification>}
          {!products && <Loader />}
          {products && products.length === 0 && (
            <Notification>No products found.</Notification>
          )}
          {products && products.length > 0 && (
            <ProductList products={products} />
          )}
        </Section>
      </Container>
    </>
  )
}

export default Shop
