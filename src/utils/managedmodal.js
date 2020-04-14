import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'


const managedModal = Modal => (
	props => {
		const [hasBeenOpened, setHasBeenOpened] = useState(false);
		
		useEffect(() => {
			if (props.showModal) {
				handleOpen();
			} else if (!props.showModal && hasBeenOpened) {
				handleClose();
			}
			return () => {
				document.querySelector('body').style.overflow = null;
			}
		}, [props.showModal])

		function handleOpen() {
			if (!hasBeenOpened) setHasBeenOpened(true);
			document.querySelector('body').style.overflow = 'hidden';
		}

		function handleClose() {
			document.querySelector('body').style.overflow = null;
		}

		const container = useRef();
		useEffect(() => {
			container.current = document.getElementById(
				'gatsby-focus-wrapper'
			)
		}, [])

		return (
			<React.Fragment>
				{hasBeenOpened && createPortal(
					<Modal {...props}/>,
					container.current,
				)}
			</React.Fragment>
		)
	}
)


export default managedModal;