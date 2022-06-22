import React, { useState } from "react"
import Button from "../Button/Button"
import Section from "../Section/Section"
import TextInput from "../TextInput/TextInput"
import Title from "../Title/Title"
import * as S from "./LoginForm.styles"

const LoginForm = ({ handleSubmit }) => {
  const [registerValues, updateRegisterValues] = useState()

  return (
    <Section>
      <Title title='Login into your account.' />
      <S.Form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(registerValues)
        }}
      >
        <TextInput
          type='email'
          label='Email'
          placeholder='example@email.com'
          handleChange={(emailValue) =>
            updateRegisterValues({ ...registerValues, email: emailValue })
          }
        />
        <TextInput
          type='password'
          label='Password'
          placeholder='password'
          handleChange={(passwordValue) =>
            updateRegisterValues({
              ...registerValues,
              password: passwordValue,
            })
          }
        />
        <Button type='submit'>Login</Button>
      </S.Form>
    </Section>
  )
}

export default LoginForm
