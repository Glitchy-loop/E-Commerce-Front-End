import React, { useState, useEffect } from "react"
import Container from "../components/Container/Container"
import Title from "../components/Title/Title"
import store from "../redux/store"
import Notification from "../components/Notification/Notification"
import Loader from "../components/Loader/Loader"
import CartView from "../components/CartView/CartView"
import Button from "../components/Button/Button"
import { useNavigate } from "react-router-dom"
import ViewProductsList from "../components/ViewProductsList/ViewProductsList"
import { useDispatch } from "react-redux"
import { removeProductFromCart } from "../redux/Cart/cartSlice"
import { connect } from "react-redux"

const Cart = (props) => {
  const [error, setError] = useState()
  const dispatch = useDispatch()
  const [token, setToken] = useState(localStorage.getItem("token"))
  const navigate = useNavigate()

  const removeFromCart = (item) => {
    dispatch(removeProductFromCart(item))
    console.log(item)
  }

  const createOrder = async () => {
    const productIds = props.products.map((product) => {
      return product.id
    })

    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/orders/add`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: localStorage.getItem("userId"),
            productId: productIds,
          }),
        }
      )

      const data = await res.json()

      if (data.err) {
        setError(data.err)
      }

      if (data.msg === "Successfully added an order.") {
        navigate("/thankyou")
      }
    } catch (err) {
      return setError(err.msg)
    }
  }

  return (
    <>
      <Container>
        <Title title='Cart' />
        {error && <Notification>{error}</Notification>}
        {!props.products && (
          <div style={{ textAlign: "center" }}>No products in a cart</div>
        )}

        {props.products && props.products.length > 0 && <Loader /> && (
          <ViewProductsList
            products={props.products}
            handleDelete={(item) => removeFromCart(item)}
          />
        )}

        <Button handleClick={() => createOrder()}>Checkout</Button>
      </Container>
    </>
  )
}

const mapStateToProps = (state) => {
  console.log(Object.values(state.cart.value))
  return {
    products: Object.values(state.cart.value).map((item) => {
      return item.product
    }),
  }
}

export default connect(mapStateToProps)(Cart)
