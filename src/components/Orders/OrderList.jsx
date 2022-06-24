import React from "react"
import PropTypes from "prop-types"
import Button from "../Button/Button"
import * as S from "./OrderList.styles"

const OrderList = ({ orders, button }) => {
  return (
    <S.Table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer email</th>
          <th>Product title</th>
          <th>Price</th>
          <th>Order time</th>
        </tr>
      </thead>
      <tbody>
        {orders &&
          orders.map((order) => (
            <tr>
              <S.Td>{order.orderId}</S.Td>
              <S.Td>{order.email}</S.Td>
              <S.Td>{order.title}</S.Td>
              <S.Td>{order.price}</S.Td>
              <S.Td>{order.timestamp}</S.Td>
              {button && (
                <S.Td>
                  <Button>Delete</Button>
                </S.Td>
              )}
            </tr>
          ))}
      </tbody>
    </S.Table>
  )
}

OrderList.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      orderId: PropTypes.number.isRequired,
      email: PropTypes.string,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ),
}

export default OrderList
