import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Container from "../components/Container/Container"
import Notification from "../components/Notification/Notification"
import OrderList from "../components/Orders/OrderList"
import Title from "../components/Title/Title"

const ThankYou = () => {
  const [token] = useState(localStorage.getItem("token"))
  const navigate = useNavigate()
  const [error, setError] = useState()
  const { id } = useParams()
  const [orders, setOrders] = useState([])
  const [orderId] = useState(localStorage.getItem("orderId"))

  const getOrder = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/orders/order/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      const data = await res.json()

      setOrders(data)
    } catch (err) {
      setError(err.msg)
    }
  }

  useEffect(() => {
    getOrder()

    if (!token) {
      navigate("/login")
    }

    if (orderId !== id) {
      navigate("/home")
    }
  }, [])

  return (
    <>
      <Container>
        {error && <Notification>{error}</Notification>}
        <Title title={`Thank you. Your order was succesfully completed.`} />
        {orders && orders.length > 0 && <OrderList orders={orders} />}
      </Container>
    </>
  )
}

export default ThankYou
