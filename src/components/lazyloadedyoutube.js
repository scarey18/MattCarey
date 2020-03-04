import React from "react"
import PropTypes from "prop-types"


const LazyLoadedYoutube = ({ url, title }) => {
	const regex = /(v=|\.be\/|\/embed\/)(\w+)&?/
	const id = url.match(regex)[2]
	const embedUrl = `https://www.youtube.com/embed/${id}?rel=0`
	const imgUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`

	const srcdoc = `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href='${embedUrl}'><img src='${imgUrl}' alt='${title}' loading='lazy'><span>▶</span></a>`

	return (
		<iframe
		  src={embedUrl}
		  srcDoc={srcdoc}
		  frameBorder="0"
		  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		  allowFullScreen={true}
		  title={title}
		  loading="lazy"
		></iframe>
	)
}


LazyLoadedYoutube.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}


export default LazyLoadedYoutube;