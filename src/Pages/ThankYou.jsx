import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Container from "../components/Container/Container"
import Title from "../components/Title/Title"

const ThankYou = () => {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  }, [])

  return (
    <>
      <Container>
        <Title title='Your purchase was complete.' />
      </Container>
    </>
  )
}

export default ThankYou
