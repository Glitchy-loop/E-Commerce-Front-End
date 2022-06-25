import React, { useState } from "react"
import Container from "../components/Container/Container"
import Title from "../components/Title/Title"
import AddProductForm from "../components/AddProduct/AddProductForm"
import Notification from "../components/Notification/Notification"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer/Footer"

const token = localStorage.getItem("token")

const AddProduct = () => {
  const [error, setError] = useState()

  const navigate = useNavigate()

  const addNewProduct = async (inputs) => {
    const fd = new FormData()

    fd.append("img", inputs.img)
    fd.append("title", inputs.title)
    fd.append("category", inputs.category)
    fd.append("price", Number(inputs.price))
    fd.append("description", inputs.description)

    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/products/add`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${token}`,
          },
          body: fd,
        }
      )
      const data = await res.json()

      if (data.err) {
        return setError(data.err)
      }

      if (data.msg) {
        setError(data.msg)
        navigate("/shop")
      }
    } catch (err) {
      return setError(err.message)
    }
  }

  return (
    <>
      <Container>
        <Title title='Add a new product' />
        {error && <Notification>{error}</Notification>}
        <AddProductForm handleSubmit={addNewProduct} />
      </Container>
      <Footer />
    </>
  )
}

export default AddProduct
