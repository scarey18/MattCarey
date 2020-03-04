import React from "react"
import styled from "styled-components"

import * as palette from '../cssvariables'
import NavLink from './navlink'


const HeaderAnchor = styled.div`
  width: 100%;
  min-height: 3rem;
  background-color: ${palette.mainBackgroundColor};
  position: relative;
`

const FixedHeader = styled.header`
  width: 100%;
  height: 3rem;
  background-color: ${palette.mainBackgroundColor};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`

const Container = styled.div`
  height: 100%;
  width: 80%;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Header = () => (
  <React.Fragment>
    <HeaderAnchor id="header-top"/>
    <FixedHeader id="header-fixed">
      <Container>
        <NavLink anchor="#header-top">Home</NavLink>
        <NavLink anchor="#about">About</NavLink>
        <NavLink anchor="#videos">Videos</NavLink>
      </Container>
    </FixedHeader>
  </React.Fragment>
)

export default Header;