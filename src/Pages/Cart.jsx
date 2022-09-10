import React, { useState } from "react"
import Container from "../components/Container/Container"
import Title from "../components/Title/Title"
import Notification from "../components/Notification/Notification"
import Loader from "../components/Loader/Loader"
import Button from "../components/Button/Button"
import { useNavigate } from "react-router-dom"
import ViewProductsList from "../components/ViewProductsList/ViewProductsList"
import { useDispatch } from "react-redux"
import { removeProductFromCart } from "../redux/Cart/cartSlice"
import { connect } from "react-redux"
import CartTotal from "../components/CartTotal/CartTotal"

const Cart = (props) => {
  const [error, setError] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const removeFromCart = (item) => {
    dispatch(removeProductFromCart(item))
  }

  const goToCheckout = async () => {
    navigate("/checkout")
  }

  return (
    <>
      <Container>
        <Title title='Cart' />
        {error && <Notification>{error}</Notification>}
        {props.productsInfos.length === 0 && (
          <>
            <h2 style={{ textAlign: "center" }}>Your cart is empty.</h2>
          </>
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
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "3rem",
              }}
            >
              <CartTotal />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button handleClick={() => goToCheckout()}>Checkout</Button>
            </div>
          </>
        )}
      </Container>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    productsInfos: Object.values(state.cart.value.products).map((item) => {
      return item
    }),
  }
}

export default connect(mapStateToProps)(Cart)
