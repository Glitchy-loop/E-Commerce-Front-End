import React, { useState } from "react"
import PropTypes from "prop-types"
import Button from "../Button/Button"
import * as S from "./Basket.styles"
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const Basket = ({ cartItems }) => {
  return (
    <Link to='/cart'>
      <Button icon={faBasketShopping}>
        <S.Span>3</S.Span>
      </Button>
    </Link>
  )
}

Basket.propTypes = {}

export default Basket
