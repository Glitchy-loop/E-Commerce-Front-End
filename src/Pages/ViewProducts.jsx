import React, { useState, useEffect } from "react"
import Container from "../components/Container/Container"
import Title from "../components/Title/Title"
import Notification from "../components/Notification/Notification"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import DashboardNav from "../components/DashboardNav/DashboardNav"
import ViewProductsList from "../components/ViewProductsList/ViewProductsList"

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

const ViewProducts = () => {
  const [error, setError] = useState()
  const [products, setProducts] = useState()
  const navigate = useNavigate()

  // Delete buttons
  const deleteFunc = async (e) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/products/delete/${e}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      const data = await res.json()

      if (data.msg === `Product with ID ${e} was sucessfully DELETED.`) {
        getProducts()
      }
      console.log(data)
    } catch (err) {
      return setError(err.msg)
    }
  }

  const getProducts = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/products`
      )
      const data = await res.json()

      console.log(data)
      setProducts(data)
    } catch (err) {
      return setError(err.msg)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Container>
        <Title title='All products list' />
        {roles === "1" && <DashboardNav links={links}></DashboardNav>}
        {roles === "0" && <DashboardNav links={links}></DashboardNav>}
        {error && <Notification>{error}</Notification>}
        {products && (
          <ViewProductsList products={products} handleDelete={deleteFunc} />
        )}
      </Container>
      <Footer />
    </>
  )
}

export default ViewProducts
