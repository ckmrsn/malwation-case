import React from 'react'
import './sideBarItem.scss'

const SideBarItem = (props) => {
	return (
		<div
			className='sideBarItem'
			onClick={() => {
				props.handleActive(props.name)
			}}
		>
			{props.icon}
		</div>
	)
}

export default SideBarItem
