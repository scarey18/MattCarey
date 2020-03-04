import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import '../global.css'
import * as palette from '../cssvariables'
import Header from "./header"


const Main = styled.main`
  width: 100%;
  height: calc(100vh - 3rem);
`

const Footer = styled.footer`
  background-color: ${palette.mainBackgroundColor};
  color: ${palette.mainColor};
`

const Layout = ({ children }) => (
    <React.Fragment>
      <Header/>
      <Main>{children}</Main>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
