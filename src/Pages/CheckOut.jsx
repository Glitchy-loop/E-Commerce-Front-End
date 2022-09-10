import React, { useState } from "react"
import Container from "../components/Container/Container"
import Title from "../components/Title/Title"
import StripeContainer from "../stripe/StripeContainer"

const CheckOut = () => {
  return (
    <Container>
      <Title title='Checkout' />
      <h2 style={{ textAlign: "center" }}>Fill in your card details</h2>
      <StripeContainer />
    </Container>
  )
}

export default CheckOut
