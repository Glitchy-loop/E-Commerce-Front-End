import React, { useState } from "react"
import Container from "../components/Container/Container"
import Notification from "../components/Notification/Notification"
import RegistrationForm from "../components/RegistrationForm/RegistrationForm"
import TextInput from "../components/TextInput/TextInput"

const Register = () => {
  const [error, setError] = useState()

  const registerUser = async (inputs) => {
    console.log(inputs)
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/users/register`,
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

      return setError("Registration Successful")
    } catch (err) {
      return setError(err.message)
    }
  }

  return (
    <>
      <Container>
        {/* {error && <Notification>{error}</Notification>} */}
        <RegistrationForm handleSubmit={registerUser} />
      </Container>
    </>
  )
}

export default Register
