import React, { useState } from "react"
import Button from "../Button/Button"
import ImgUploader from "../ImgUploader/ImgUploader"
import Section from "../Section/Section"
import TextInput from "../TextInput/TextInput"
import Title from "../Title/Title"
import * as S from "./AddProductForm.styles"

const AddProductForm = ({ handleSubmit }) => {
  const [productValues, updateProductValues] = useState()

  return (
    <Section>
      <Title title='Please fill in details.' />
      <S.Form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(productValues)
        }}
      >
        <ImgUploader
          label='Product image'
          handleChange={(img) =>
            updateProductValues({ ...productValues, img: img })
          }
        />

        <TextInput
          type='text'
          label='Title'
          placeholder='Product title'
          handleChange={(titleValue) =>
            updateProductValues({ ...productValues, title: titleValue })
          }
        />
        <TextInput
          type='text'
          label='Category'
          placeholder='Product category'
          handleChange={(categoryValue) =>
            updateProductValues({
              ...productValues,
              category: categoryValue,
            })
          }
        />
        <TextInput
          type='text'
          label='Price'
          placeholder='Product price'
          handleChange={(priceValue) =>
            updateProductValues({
              ...productValues,
              price: priceValue,
            })
          }
        />
        <TextInput
          type='text'
          label='Description'
          placeholder='Product description'
          handleChange={(descriptionValue) =>
            updateProductValues({
              ...productValues,
              description: descriptionValue,
            })
          }
        />
        <Button type='submit'>Add</Button>
      </S.Form>
    </Section>
  )
}

export default AddProductForm
