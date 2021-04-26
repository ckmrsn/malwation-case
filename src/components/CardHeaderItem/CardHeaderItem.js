import React from 'react'
import './cardHeaderItem.scss'

const CardHeaderItem = ({ children, title }) => {
	return (
		<div className='cardHeaderItem'>
			<h3>{title}</h3>
			<div className='cardHeaderContent'>{children}</div>
		</div>
	)
}

export default CardHeaderItem
