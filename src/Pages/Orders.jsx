import React from "react"
import { useState, useEffect } from "react"
import Container from "../components/Container/Container"
import Notification from "../components/Notification/Notification"
import Title from "../components/Title/Title"
import OrderList from "../components/Orders/OrderList"
import Loader from "../components/Loader/Loader"
import DashboardNav from "../components/DashboardNav/DashboardNav"

const admin = localStorage.getItem("roles") === "1"
const customer = localStorage.getItem("roles") === "0"

const adminLinks = [
  { url: "/dashboard", title: "Dashboard" },
  { url: "/dashboard/add", title: "Add product" },
  { url: "/dashboard/orders", title: "Orders" },
]
const clientLinks = [
  { url: "/dashboard", title: "Dashboard" },
  { url: "/dashboard/orders", title: "Orders" },
]

const roles = localStorage.getItem("roles")
const links = localStorage.getItem("roles") === "1" ? adminLinks : clientLinks

// Get all orders
const Orders = () => {
  const [orders, setOrders] = useState()
  const [error, setError] = useState()

  const getAllOrders = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/orders/all`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
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
        `${
          process.env.REACT_APP_BACKEND_URL
        }/v1/orders/customer/${localStorage.getItem("userId")}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      const data = await res.json()

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
    <Container>
      <Title title='Orders' />

      {roles === "1" && <DashboardNav links={links}></DashboardNav>}

      {roles === "0" && <DashboardNav links={links}></DashboardNav>}

      {error && <Notification>{error}</Notification>}

      {!orders && <Loader />}
      {admin && orders && <OrderList orders={orders} />}

      {customer && orders && <OrderList orders={orders} />}
    </Container>
  )
}

export default Orders
