import React, { useState } from "react"
import Container from "../components/Container/Container"
import Title from "../components/Title/Title"
import AddProductForm from "../components/AddProduct/AddProductForm"
import Notification from "../components/Notification/Notification"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import DashboardNav from "../components/DashboardNav/DashboardNav"

const token = localStorage.getItem("token")

const adminLinks = [
  { url: "/dashboard", title: "Dashboard" },
  { url: "/dashboard/view-products", title: "View products" },
  { url: "/dashboard/add", title: "Add product" },
  { url: "/dashboard/orders", title: "Orders" },
]
const clientLinks = [
  { url: "/dashboard", title: "Dashboard" },
  { url: "/dashboard/orders", title: "Orders" },
]
const roles = localStorage.getItem("roles")
const links = localStorage.getItem("roles") === "1" ? adminLinks : clientLinks

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
        navigate("/dashboard/view-products")
      }
    } catch (err) {
      return setError(err.message)
    }
  }

  return (
    <>
      <Container>
        <Title title='Add a new product' />

        {roles === "1" && <DashboardNav links={links}></DashboardNav>}
        {roles === "0" && <DashboardNav links={links}></DashboardNav>}

        {error && <Notification>{error}</Notification>}
        <AddProductForm handleSubmit={addNewProduct} />
      </Container>
      <Footer />
    </>
  )
}

export default AddProduct