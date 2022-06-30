import React from "react"
import Container from "../components/Container/Container"
import Title from "../components/Title/Title"

const Cart = () => {
  const cartItems = localStorage.getItem("cart")
  return (
    <>
      <Container>
        <Title title='Cart' />
        {cartItems}
      </Container>
    </>
  )
}

export default Cart
