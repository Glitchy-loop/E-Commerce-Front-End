import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Button from "../Button/Button"
import * as S from "./Basket.styles"
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import store from "../../redux/store"

const Basket = () => {
  const cartItems = store.getState().cart.value
  let sum = 0
  const [cartItemsLength, setCartItemsLength] = useState(0)

  for (const key in Object(cartItems)) {
    sum += Object(cartItems)[key]
  }
  useEffect(() => {
    console.log(cartItemsLength)
    setCartItemsLength(sum)
  })

  return (
    <Link to='/cart'>
      <Button icon={faBasketShopping}>
        <S.Span>{cartItemsLength}</S.Span>
      </Button>
    </Link>
  )
}

Basket.propTypes = {}

export default Basket
