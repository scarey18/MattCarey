import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'


const managedModal = (Modal, querySelector='body') => (
	props => {
		const [hasBeenOpened, setHasBeenOpened] = useState(false);
		
		useEffect(() => {
			if (props.showModal) {
				if (!hasBeenOpened) setHasBeenOpened(true);
				preventScroll();
			} else if (!props.showModal && hasBeenOpened) {
				allowScroll();
			}
			return () => {
				allowScroll();
			}
		}, [props.showModal])

		function preventScroll() {
			const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
			if (scrollbarWidth > 0) {
				document.body.style.paddingRight = `${scrollbarWidth}px`;
				document.body.style.overflow = 'hidden';
			}
		}

		function allowScroll() {
			document.body.style.paddingRight = null;
			document.body.style.overflow = null;
		}

		const container = useRef();
		useEffect(() => {
			container.current = document.querySelector(
				querySelector
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