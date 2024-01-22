import React from 'react'

const Footer = ({length}) => {
	const year = new Date();
	
	return(
		<footer>copy right &copy; ${year.getFullYear()} 
		 List {length === 1 ? "item" : "items"} {length}</footer>
	);
}

export default Footer