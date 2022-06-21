import React, { useState } from "react"
import * as S from "./Navigation.styles"
import logo from "../../assets/logo.png"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"

const Navigation = () => {
  const [hiddenMenu, setHiddenMenu] = useState(false)

  return (
    <S.Header>
      <S.Navigation>
        <S.Logo src={logo} alt='logo' />
        <S.Icon
          onClick={() => {
            setHiddenMenu((curr) => !curr)
          }}
          icon={hiddenMenu ? faX : faBars}
        ></S.Icon>
      </S.Navigation>
      {hiddenMenu && (
        <S.Menu>
          <S.StyledLink to='/'>Home</S.StyledLink>
          <S.StyledLink to='/Shop'>Shop</S.StyledLink>
          <S.StyledLink to='/Contacts'>Contacts</S.StyledLink>
        </S.Menu>
      )}
      <>haaa</>
    </S.Header>
  )
}

export default Navigation
