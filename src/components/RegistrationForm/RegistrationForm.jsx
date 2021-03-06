import React, { useState } from "react"
import Button from "../Button/Button"
import Radio from "../Radio/Radio"
import Section from "../Section/Section"
import TextInput from "../TextInput/TextInput"
import Title from "../Title/Title"
import * as S from "./RegistrationForm.styles"

const RegistrationForm = ({ handleSubmit }) => {
  const [registerValues, updateRegisterValues] = useState()

  return (
    <Section>
      <Title title='Register a new user.' />
      <S.Form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(registerValues)
        }}
      >
        <TextInput
          type='text'
          label='First name'
          placeholder='name'
          handleChange={(nameValue) =>
            updateRegisterValues({ ...registerValues, name: nameValue })
          }
        />
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
        <p style={{ padding: ".5rem 0" }}>
          What role you wish to register your account with?
        </p>
        <Radio
          label='Customer'
          name='roles'
          value='0'
          handleChange={(roleValue) =>
            updateRegisterValues({ ...registerValues, roles: roleValue })
          }
        />
        <Radio
          label='Admin'
          name='roles'
          value='1'
          handleChange={(roleValue) =>
            updateRegisterValues({ ...registerValues, roles: roleValue })
          }
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button type='submit'>Register</Button>
          <S.StyledLink to='/login'>
            <Button>Already have account?</Button>
          </S.StyledLink>
        </div>
      </S.Form>
    </Section>
  )
}

export default RegistrationForm
