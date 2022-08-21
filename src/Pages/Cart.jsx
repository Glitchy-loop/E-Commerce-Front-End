import React, { useState } from "react"
import Container from "../components/Container/Container"
import Title from "../components/Title/Title"
import store from "../redux/store"
import Notification from "../components/Notification/Notification"
import Loader from "../components/Loader/Loader"
import Button from "../components/Button/Button"
import { useNavigate } from "react-router-dom"
import ViewProductsList from "../components/ViewProductsList/ViewProductsList"
import { useDispatch } from "react-redux"
import { removeProductFromCart, reset } from "../redux/Cart/cartSlice"
import { connect } from "react-redux"

const Cart = (props) => {
  const [error, setError] = useState()
  const dispatch = useDispatch()
  const [token] = useState(localStorage.getItem("token"))
  const navigate = useNavigate()
  const [orderId, setOrderId] = useState(localStorage.getItem("orderId"))

  const removeFromCart = (item) => {
    dispatch(removeProductFromCart(item))
  }

  const createOrder = async () => {
    const productsInfos = props.productsInfos.map((productInfo) => {
      return {
        quantity: store.getState().cart.value[productInfo.product.id].count,
        product: productInfo.product,
      }
    })

    const finalCart = {
      productsInfos: productsInfos,
      userId: Number(localStorage.getItem("userId")),
    }

    console.log(finalCart)
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/orders/add`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalCart),
        }
      )

      const data = await res.json()

      if (!token) {
        navigate("/login")
      }

      if (data.err) {
        setError(data.err)
      }
      console.log(data)

      if (data.msg === "Successfully added an order.") {
        setOrderId(localStorage.setItem("orderId", data.orderId))
        dispatch(reset())
        navigate(`/thankyou/${data.orderId}`)
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
        {!props.productsInfos && (
          <div style={{ textAlign: "center" }}>No products in a cart</div>
        )}

        {props.productsInfos &&
          props.productsInfos.length > 0 && <Loader /> && (
            <ViewProductsList
              products={props.productsInfos}
              handleDelete={(item) => removeFromCart(item)}
              isCart={true}
            />
          )}
        {props.productsInfos.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "3rem",
            }}
          >
            <Button handleClick={() => createOrder()}>Checkout</Button>
          </div>
        )}
      </Container>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    productsInfos: Object.values(state.cart.value).map((item) => {
      return item
    }),
  }
}

export default connect(mapStateToProps)(Cart)
