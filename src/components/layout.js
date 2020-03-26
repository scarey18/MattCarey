import React, { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import '../global.css'
import * as palette from '../cssvariables'
import Header from "./header"


const Main = styled.main`
  width: 100%;
  height: calc(100% - 3rem);
`

const Footer = styled.footer`
  background-color: ${palette.mainBackgroundColor};
  color: ${palette.mainColor};
`


export const MobileContext = createContext();

let mql;

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const updateMobile = () => setIsMobile(mql.matches);

  useEffect(() => {
    mql = window.matchMedia('(max-width: 599px)');
    updateMobile();
    mql.addListener(updateMobile);
    return () => mql.removeListener(updateMobile);
  }, [])

  return (
    <MobileContext.Provider value={isMobile}>
      <Header/>
      <Main>{children}</Main>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </MobileContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
