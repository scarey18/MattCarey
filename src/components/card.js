import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import * as palette from '../cssvariables'


const StyledCard = styled.div`
	border-radius: 8px;
	box-shadow: 0 3px 7px 0 ${palette.boxShadow};
`


const Card = ({ className, children, onMouseEnter, onClick }) => {
	return (
		<StyledCard 
			className={className}
			onMouseEnter={onMouseEnter}
			onClick={onClick}
		>
			{children}
		</StyledCard>
	)
}


Card.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	onMouseEnter: PropTypes.func,
	onClick: PropTypes.func,
}


export default Card;