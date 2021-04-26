import React from 'react'
import Card from '../Card/Card'
import SideBar from '../SideBar/SideBar'
import './main.scss'

const Main = () => {
	return (
		<div className='main'>
			<SideBar />
			<Card />
		</div>
	)
}

export default Main
