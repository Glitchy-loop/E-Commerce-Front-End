import React, { useState, useEffect } from "react"
import Container from "../components/Container/Container"
import Title from "../components/Title/Title"
import AddProductForm from "../components/AddProduct/AddProductForm"
import Notification from "../components/Notification/Notification"
import { useNavigate } from "react-router-dom"
import DashboardNav from "../components/DashboardNav/DashboardNav"

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
const AddProduct = () => {
  const [error, setError] = useState()
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [roles, setRoles] = useState(localStorage.getItem("roles"))

  const links = roles === "1" ? adminLinks : clientLinks

  const navigate = useNavigate()
  useEffect(() => {
    if (!token || roles !== "1") {
      navigate("/dashboard")
    }
  }, [])

  const addNewProduct = async (inputs) => {
    const fd = new FormData()

    fd.append("img", inputs.img)
    fd.append("title", inputs.title)
    fd.append("category", inputs.category)
    fd.append("price", Number(inputs.price))
    fd.append("description", inputs.description)
    fd.append("inStock", Number(inputs.inStock))

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
    </>
  )
}

export default AddProduct
