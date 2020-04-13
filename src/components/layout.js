import React, { createContext, useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"
import { darken } from "polished"

import * as palette from '../cssvariables'
import Header from "./header"


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: swap;
  }

  * {
    transition: all 250ms ease-in-out;
  }

  html, body, #___gatsby {
    width: 100%;
    overflow: auto;
    overflow: initial;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
  }

  button {
    text-decoration: none;
    border: none;
  }

  button:focus {
    outline: none;
  }

  button:active {
    border-style: none;
  }

  a {
    color: ${palette.linkColor};
  }
`

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

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const mql = useRef();

  const updateMobile = () => setIsMobile(mql.current.matches);

  useEffect(() => {
    mql.current = window.matchMedia('(max-width: 599px)');
    updateMobile();
    mql.current.addListener(updateMobile);
    return () => mql.current.removeListener(updateMobile);
  }, [])

  return (
    <MobileContext.Provider value={isMobile}>
      <GlobalStyle />
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

export default Layout;