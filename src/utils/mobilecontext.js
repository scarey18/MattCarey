import React, {
 createContext, useEffect, useState, useRef, useContext 
} from "react"
import PropTypes from "prop-types"


const MobileContext = createContext();

export const useMobileContext = () => useContext(MobileContext);

export const MobileContextProvider = ({ children }) => {
	const [isMobile, setIsMobile] = useState(false);
  const mql = useRef();

  function updateMobile() {setIsMobile(mql.current.matches)}

  useEffect(() => {
    mql.current = window.matchMedia('(max-width: 599px)');
    updateMobile();
    mql.current.addListener(updateMobile);
    return () => mql.current.removeListener(updateMobile);
  }, [])

  return (
  	<MobileContext.Provider value={isMobile}>
  		{children}
  	</MobileContext.Provider>
  )
}


MobileContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
}