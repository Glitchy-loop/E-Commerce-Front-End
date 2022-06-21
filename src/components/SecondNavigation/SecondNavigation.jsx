import React from "react"
import * as S from "./SecondNavigation.styles"
import Button from "../Button/Button"
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"

const SecondNavigation = () => {
  return (
    <S.SecondNavigation>
      <Button icon={faEllipsisVertical}>Catalog</Button>
      <div>
        <input type='search' />
      </div>
      <div>userMenu</div>
    </S.SecondNavigation>
  )
}

export default SecondNavigation
