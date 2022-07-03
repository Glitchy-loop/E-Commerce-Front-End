import React, { useState, useEffect } from "react"
import Container from "../components/Container/Container"
import Title from "../components/Title/Title"
import store from "../redux/store"
import Notification from "../components/Notification/Notification"
import Loader from "../components/Loader/Loader"
import CartView from "../components/CartView/CartView"
import Button from "../components/Button/Button"
import { Link } from "react-router-dom"
import ViewProductsList from "../components/ViewProductsList/ViewProductsList"
import { useDispatch } from "react-redux"
import { removeProductFromCart } from "../redux/Cart/cartSlice"

const Cart = () => {
  const cartItems = store.getState().cart.value
  const [error, setError] = useState()
  const [products, setProducts] = useState()
  const dispatch = useDispatch()

  const getProducts = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/products/list/${Object.keys(
          cartItems
        )}`
      )
      const data = await res.json()

      if (data.err) {
        setError(data.err)
      }

      setProducts(data)
      // console.log([products])
    } catch (err) {
      return setError(err.msg)
    }
  }

  useEffect(() => {
    if (Object.keys(cartItems).length > 0) {
      getProducts()
    }
  }, [])

  const removeFromCart = (e) => {
    dispatch(removeProductFromCart(e))
    setProducts(cartItems)
  }

  return (
    <>
      <Container>
        <Title title='Cart' />
        {error && <Notification>{error}</Notification>}
        {!products && (
          <div style={{ textAlign: "center" }}>No products in a cart</div>
        )}
        {products && products.length > 0 && <Loader /> && (
          <ViewProductsList
            key={products.title}
            products={products}
            handleDelete={(e) => removeFromCart(e)}
          />
        )}
        <Link to='/thankyou'>
          <Button>Checkout</Button>
        </Link>
      </Container>
    </>
  )
}

export default Cart
