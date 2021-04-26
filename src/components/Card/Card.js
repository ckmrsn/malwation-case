import React from 'react'
import CardChart from '../CardChart/CardChart'
import CardContent from '../CardContent/CardContent'
import './card.scss'

const Card = () => {
	return (
		<div className='card'>
			<CardContent />
			<CardChart />
		</div>
	)
}

export default Card
