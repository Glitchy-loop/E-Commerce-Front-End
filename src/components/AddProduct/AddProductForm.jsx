import React, { useState } from "react"
import Button from "../Button/Button"
import ImgUploader from "../ImgUploader/ImgUploader"
import Section from "../Section/Section"
import TextInput from "../TextInput/TextInput"
import * as S from "./AddProductForm.styles"

const AddProductForm = ({ handleSubmit }) => {
  const [productValues, updateProductValues] = useState()

  return (
    <Section>
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
        <TextInput
          type='text'
          label='Stock'
          placeholder='Product stock'
          handleChange={(inStock) =>
            updateProductValues({
              ...productValues,
              inStock: inStock,
            })
          }
        />
        <Button type='submit'>Add</Button>
      </S.Form>
    </Section>
  )
}

export default AddProductForm
