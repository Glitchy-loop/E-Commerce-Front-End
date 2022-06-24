import React, { useState } from "react"
import Container from "../components/Container/Container"
import Notification from "../components/Notification/Notification"
import LoginForm from "../components/LoginForm/LoginForm"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [error, setError] = useState()

  const navigate = useNavigate()

  const registerUser = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        }
      )
      const data = await res.json()

      if (data.err) {
        return setError(data.err)
      }

      localStorage.setItem("userId", data.accountId)
      localStorage.setItem("token", data.token)
      localStorage.setItem("roles", data.roles)
      navigate("/")
      return setError("Login Successful")
    } catch (err) {
      return setError(err.message)
    }
  }

  return (
    <>
      <Container>
        {error && <Notification>{error}</Notification>}
        <LoginForm handleSubmit={registerUser} />
      </Container>
    </>
  )
}

export default Register
