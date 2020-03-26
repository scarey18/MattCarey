import React, { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { darken } from "polished"

import '../global.css'
import * as palette from '../cssvariables'
import Header from "./header"


const Main = styled.main`
  width: 100%;
`

const Footer = styled.footer`
  background-color: ${palette.mainBackgroundColor};
  color: ${palette.mainColor};
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${darken(0.3, palette.mainColor)};
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
        © {new Date().getFullYear()} Matthew Carey | Designed and maintained by Sean Carey
      </Footer>
    </MobileContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
