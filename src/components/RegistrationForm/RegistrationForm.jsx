import React, { useState } from "react"
import Button from "../Button/Button"
import Checkbox from "../Checkbox/Checkbox"
import Section from "../Section/Section"
import TextInput from "../TextInput/TextInput"

const RegistrationForm = ({ handleSubmit }) => {
  const [registerValues, updateRegisterValues] = useState()

  return (
    <Section>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(registerValues)
        }}
      >
        <TextInput
          type='text'
          label='Name'
          placeholder='name'
          handleChange={(nameValue) =>
            updateRegisterValues({ ...registerValues, name: nameValue })
          }
        />
        <TextInput
          type='email'
          label='Email'
          placeholder='info@example.com'
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
        <Checkbox
          label='Client'
          name='roles'
          value='0'
          handleChange={(roleValue) =>
            updateRegisterValues({ ...registerValues, roles: roleValue })
          }
        />
        <Checkbox
          label='Admin'
          name='roles'
          value='1'
          handleChange={(roleValue) =>
            updateRegisterValues({ ...registerValues, roles: roleValue })
          }
        />
        <Button type='submit'>Register</Button>
      </form>
    </Section>
  )
}

export default RegistrationForm
