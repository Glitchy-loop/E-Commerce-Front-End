import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Button from "../Button/Button"
import * as S from "./Basket.styles"
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import store from "../../redux/store"
import { connect } from "react-redux"

const Basket = (props) => {
  const cartItems = store.getState().cart.value
  const [cartItemsLength, setCartItemsLength] = useState(0)

  return (
    <Link to='/cart'>
      <Button icon={faBasketShopping}>
        <S.Span>{props.value}</S.Span>
      </Button>
    </Link>
  )
}

Basket.propTypes = {}

const mapStateToProps = (state) => {
  let sum = 0
  for (const key in Object(state.cart.value)) {
    sum += Object(state.cart.value)[key].count
  }
  console.log(sum)
  return {
    value: sum,
  }
}

export default connect(mapStateToProps)(Basket)
