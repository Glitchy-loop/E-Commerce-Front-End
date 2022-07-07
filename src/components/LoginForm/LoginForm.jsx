import React, { useState } from "react"
import Button from "../Button/Button"
import Section from "../Section/Section"
import TextInput from "../TextInput/TextInput"
import Title from "../Title/Title"
import * as S from "./LoginForm.styles"

const LoginForm = ({ handleSubmit }) => {
  const [loginValues, updateLoginValues] = useState()

  return (
    <Section>
      <Title title='Login into your account.' />
      <S.Form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(loginValues)
        }}
      >
        <TextInput
          type='email'
          label='Email'
          placeholder='example@email.com'
          handleChange={(emailValue) =>
            updateLoginValues({ ...loginValues, email: emailValue })
          }
        />
        <TextInput
          type='password'
          label='Password'
          placeholder='password'
          handleChange={(passwordValue) =>
            updateLoginValues({
              ...loginValues,
              password: passwordValue,
            })
          }
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button type='submit'>Login</Button>
          <S.StyledLink to='/register'>
            <Button>Don't have an account?</Button>
          </S.StyledLink>
        </div>
      </S.Form>
    </Section>
  )
}

export default LoginForm
