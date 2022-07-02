import React, { useState, useEffect } from "react"
import Container from "../components/Container/Container"
import Title from "../components/Title/Title"
import store from "../redux/store"
import ProductList from "../components/ProductList/ProductList"
import Notification from "../components/Notification/Notification"
import Loader from "../components/Loader/Loader"

const Cart = () => {
  let cartItems = store.getState().cart.value

  const [error, setError] = useState()

  const [products, setProducts] = useState()

  const getProducts = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/products/cart/${Object.keys(
          cartItems
        )}`
      )
      const data = await res.json()

      if (data.err) {
        setError(data.err)
      }

      setProducts(data)
      console.log([products])
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
        <Title title='Cart' />
        {error && <Notification>{error}</Notification>}
        {!products && (
          <div style={{ textAlign: "center" }}>No products in a cart</div>
        )}
        {products && products.length > 0 && <Loader /> && (
          <ProductList key={products.title} products={products} />
        )}
      </Container>
    </>
  )
}

export default Cart
