import React from "react"
import styled from "styled-components"
import { darken } from "polished"
import PropTypes from "prop-types"
import scrollTo from 'gatsby-plugin-smoothscroll'

import * as palette from '../cssvariables'


const StyledLink = styled.a`
  text-decoration: none;
  color: ${darken(0.3, palette.mainColor)};
  cursor: pointer;
  padding: 10px;
  transition: color 250ms ease-in-out;

  &:hover {
    color: ${palette.mainColor};
  }
`


const NavLink = ({ anchor, children }) => {
  const handleClick = e => {
    e.preventDefault();
    scrollTo(anchor);
  }

  return (
  	<StyledLink onClick={handleClick}>
  		{children}
  	</StyledLink>
  )
}


NavLink.propTypes = {
	anchor: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}


export default NavLink;