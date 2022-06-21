import React from "react"
import * as S from "./SecondNavigation.styles"
import Button from "../Button/Button"
import {
  faEllipsisVertical,
  faUser,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const SecondNavigation = () => {
  return (
    <S.SecondNavigation>
      <S.CatalogDiv>
        <Button icon={faEllipsisVertical}>Catalog</Button>
      </S.CatalogDiv>

      <div>
        <input type='search' placeholder='Search...' />
      </div>
      <S.UserMenu>
        <Link to='/cart'>
          <Button icon={faBasketShopping} to='/aaa'></Button>
        </Link>
        <Link to='/my-account'>
          <Button icon={faUser} to='/aaa'></Button>
        </Link>
      </S.UserMenu>
    </S.SecondNavigation>
  )
}

export default SecondNavigation
