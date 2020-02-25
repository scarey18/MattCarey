import React from "react"
import styled from "styled-components"

import NavLink from './navlink'
import ContentContainer from './contentcontainer'


const HeaderAnchor = styled.div`
  width: 100%;
  min-height: 3rem;
  background-color: #020202;
  position: relative;
`

const FixedHeader = styled.header`
  width: 100%;
  height: 3rem;
  background-color: #020202;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`

const Container = styled(ContentContainer)`
  height: 100%;
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
      </Container>
    </FixedHeader>
  </React.Fragment>
)

export default Header;