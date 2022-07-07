import React from "react"
import { useState, useEffect } from "react"
import Container from "../components/Container/Container"
import Notification from "../components/Notification/Notification"
import Title from "../components/Title/Title"
import OrderList from "../components/Orders/OrderList"
import Loader from "../components/Loader/Loader"
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

const Orders = () => {
  const [orders, setOrders] = useState()
  const [error, setError] = useState()
  const [token] = useState(localStorage.getItem("token"))
  const [roles] = useState(localStorage.getItem("roles"))
  const [userId] = useState(localStorage.getItem("userId"))

  const admin = roles === "1"
  const customer = roles === "0"
  const links = roles === "1" ? adminLinks : clientLinks

  // Get all orders
  const getAllOrders = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/orders/all`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      const data = await res.json()

      setOrders(data)
    } catch (err) {
      return setError(err.message)
    }
  }

  // Get customer orders
  const getCustomerOrders = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/orders/customer/${userId}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      const data = await res.json()

      if (data.err) {
        return <Notification>{data.err}</Notification>
      }

      setOrders(data)
    } catch (err) {
      return setError(err.message)
    }
  }

  useEffect(() => {
    admin && getAllOrders()
    customer && getCustomerOrders()
  }, [])

  return (
    <>
      <Container>
        <Title title='Orders' />

        {roles === "1" && <DashboardNav links={links}></DashboardNav>}
        {roles === "0" && <DashboardNav links={links}></DashboardNav>}

        {error && <Notification>{error}</Notification>}

        {!orders && <Loader /> && <Notification>No orders found.</Notification>}
        {admin && orders && <OrderList orders={orders} />}

        {customer && orders && <OrderList orders={orders} />}
      </Container>
    </>
  )
}

export default Orders
