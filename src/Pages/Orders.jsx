import React from "react"
import { useState, useEffect } from "react"
import Container from "../components/Container/Container"
import Notification from "../components/Notification/Notification"
import Title from "../components/Title/Title"
import OrderList from "../components/Orders/OrderList"
import Loader from "../components/Loader/Loader"

const admin = localStorage.getItem("roles") === "1"
const customer = localStorage.getItem("roles") === "0"

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
      {error && <Notification>{error}</Notification>}

      {!orders && <Loader />}
      {admin && orders && <OrderList orders={orders} />}

      {customer && orders && <OrderList orders={orders} />}
    </Container>
  )
}

export default Orders
