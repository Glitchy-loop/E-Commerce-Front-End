import React from "react"
import Button from "../Button/Button"
import * as S from "./Basket.styles"
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

const Basket = (props) => {
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
  for (const key in Object(state.cart.value.products)) {
    sum += Object(state.cart.value.products)[key].count
  }
  return {
    value: sum,
  }
}

export default connect(mapStateToProps)(Basket)
