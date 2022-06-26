import React, { useState, setState, useEffect } from "react"
import Container from "../components/Container/Container"
import Notification from "../components/Notification/Notification"
import LoginForm from "../components/LoginForm/LoginForm"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer/Footer"

const Login = () => {
  const [error, setError] = useState()
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [roles, setRoles] = useState(localStorage.getItem("roles"))
  const [userId, setUserId] = useState(localStorage.getItem("userId"))

  const navigate = useNavigate()

  const loginUser = async (inputs) => {
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

      setUserId(localStorage.setItem("userId", data.accountId))
      setRoles(localStorage.setItem("roles", data.roles))
      setToken(localStorage.setItem("token", data.token))
      navigate("/dashboard")
      return setError("Login Successful")
    } catch (err) {
      return setError(err.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate("/dashboard")
    }
  }, [])

  return (
    <>
      <Container>
        {error && <Notification>{error}</Notification>}
        <LoginForm handleSubmit={loginUser} />
      </Container>
      <Footer />
    </>
  )
}

export default Login
