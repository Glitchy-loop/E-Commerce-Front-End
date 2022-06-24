import React from "react"
import { useState, useEffect } from "react"
import Container from "../components/Container/Container"
import Notification from "../components/Notification/Notification"
import Title from "../components/Title/Title"
import OrderList from "../components/Orders/OrderList"
import Loader from "../components/Loader/Loader"

const admin = localStorage.getItem("roles") === "1"

const Orders = () => {
  const [orders, setOrders] = useState()
  const [error, setError] = useState()

  // const orderz = [
  //   { userId: 8, productId: 2, date: "2022-06-24 09:07:38" },
  //   { userId: 9, productId: 2, date: "2022-06-24 10:11:38" },
  // ]

  const getOrders = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/orders/details`
      )
      const data = await res.json()

      setOrders(data)
    } catch (err) {
      return setError(err.message)
    }
  }

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <Container>
      {admin && <Title title='Orders' />}
      {error && <Notification>{error}</Notification>}
      {!orders && <Loader />}
      {orders && <OrderList orders={orders} />}
    </Container>
  )
}

export default Orders
