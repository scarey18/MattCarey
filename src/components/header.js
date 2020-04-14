import React, { useState, useEffect } from "react"
import styled from "styled-components"

import * as palette from '../cssvariables'
import { useMobileContext } from '../utils/mobilecontext'
import MobileNav from './mobilenav'
import NavLink from './navlink'


const HeaderAnchor = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${palette.black};
  position: relative;
`

const FixedHeader = styled.header`
  width: 100%;
  height: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all 250ms ease-in-out;
  display: flex;
  justify-content: flex-end;
  background-color: ${palette.black};
`

const NavBar = styled.nav`
  height: 100%;
  width: 80%;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMobileContext();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  function handleScroll() {
    if (window.scrollY === 0) {
      setIsScrolled(false);
    }
    else {
      setIsScrolled(true);
    }
  }

  const fixedHeaderStyle = isScrolled ? {
    backgroundColor: palette.mainBackgroundColor,
    boxShadow: `0 3px 7px 0 ${palette.boxShadow}`,
  } : {
    backgroundColor: palette.black,
  }

  const navLinks = [
    <NavLink anchor="#header-top" key='0'>Home</NavLink>,
    <NavLink anchor="#about" key='1'>About</NavLink>,
    <NavLink anchor="#videos" key='2'>Videos</NavLink>,
    <NavLink anchor="#photos" key='3'>Photos</NavLink>,
    <NavLink anchor="#repertoire" key='4'>Repertoire</NavLink>,
    <NavLink anchor="#contact" key='5'>Contact</NavLink>,
  ]

  const navigation = isMobile ? (
    <MobileNav navLinks={navLinks} />
  ) : (
    <NavBar>
      {navLinks}
    </NavBar>
  )

  return (
    <React.Fragment>
      <HeaderAnchor id="header-top"/>
      <FixedHeader id="header-fixed" style={fixedHeaderStyle}>
        {navigation}
      </FixedHeader>
    </React.Fragment>
  )
}

export default Header;