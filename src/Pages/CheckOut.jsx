import React, { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Container from "../components/Container/Container"
import Title from "../components/Title/Title"
import StripeContainer from "../stripe/StripeContainer"

const CheckOut = () => {
  const [token] = useState(localStorage.getItem("token"))
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  }, [])

  return (
    <Container>
      <Title title='Checkout' />
      <h2 style={{ textAlign: "center" }}>Fill in your card details</h2>
      <p style={{ textAlign: "center" }}>
        This is for testing only,
        <br />
        you can use fake card details:
        <br />
        <span style={{ color: "grey" }}>'42424242424242424242424242424'</span>
      </p>
      <StripeContainer />
    </Container>
  )
}

export default CheckOut
