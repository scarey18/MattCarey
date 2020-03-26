import React, { useState } from "react"
import styled from "styled-components"
import { darken } from "polished"
import PropTypes from "prop-types"

import '../hamburgers.min.css'
import * as palette from '../cssvariables'


const HamburgerBtn = styled.button.attrs(props => {
  const classNames = ['hamburger', 'hamburger--spin'];
  if (props.menuDropped) classNames.push('is-active');
  return {className: classNames.join(' ')}
})`
  margin: auto 10%;
  opacity: 0.7;

  &:hover {
    opacity: 1 !important;
  }

  .hamburger-inner {
    background-color: ${palette.mainColor} !important;

    &::before, &::after {
      background-color: ${palette.mainColor} !important;
    }
  }
`

const Menu = styled.nav`
  z-index: 110;
	position: absolute;
	top: 100%;
  right: 0;
	min-width: 70%;
	display: flex;
	flex-direction: column;
  align-items: center;
  transition: all 400ms ease-in;
  overflow: hidden;
  background-color: ${palette.mainBackgroundColor};
  box-shadow: 0 3px 7px 0 ${palette.boxShadow};
`

const NavItem = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  height: 3rem;
  border-bottom: 1px solid ${darken(0.5, palette.mainColor)};
  display: flex;
  justify-content: center;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`


const MobileNav = ({ navLinks }) => {
	const [menuDropped, setMenuDropped] = useState(false);

  const menuStyle = menuDropped ? {
    maxHeight: '100vh',
    borderTop: `2px solid ${palette.secondaryBackgroundColor}`,
  } : {
    maxHeight: 0,
    borderTop: 'none',
  }

  return (
  	<React.Fragment>
  		<HamburgerBtn
        menuDropped={menuDropped} 
        type="button"
        onClick={() => setMenuDropped(!menuDropped)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </HamburgerBtn>
  		<Menu style={menuStyle}>
        {navLinks.map((navLink, i) => (
          <NavItem onClick={() => setMenuDropped(false)} key={i}>
            {navLink}
          </NavItem>
        ))}
      </Menu>
  	</React.Fragment>
  )
}


MobileNav.propTypes = {
  navLinks: PropTypes.array.isRequired,
}


export default MobileNav;