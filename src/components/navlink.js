import React from "react"
import styled from "styled-components"
import { darken } from "polished"
import PropTypes from "prop-types"
import scrollTo from 'gatsby-plugin-smoothscroll'


const StyledLink = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  transition: color 250ms ease-in-out;

  &:hover {
    color: ${darken(0.3, '#fff')};
  }
`


const NavLink = ({ anchor, children }) => (
	<StyledLink onClick={() => scrollTo(anchor)}>
		{children}
	</StyledLink>
)


NavLink.propTypes = {
	anchor: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}


export default NavLink;