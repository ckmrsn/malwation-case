import React, { useState } from 'react'
import './cardContentBody.scss'
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa'
import CardContentListItem from '../CardContentListItem/CardContentListItem'
const data = [
	{
		id: 1,
		title: 'Shopping',
		date: '05 Jun 2020 10:00',
		value: 300,
	},
	{
		id: 2,
		title: 'Grocery',
		date: '12 Jun 2020 10:00',
		value: 45,
	},
	{
		id: 3,
		title: 'Gym',
		date: '23 Jun 2020 12:00',
		value: 125,
	},
	{
		id: 4,
		title: 'Laundry',
		date: '27 Jun 2020 09:45',
		value: 90,
	},
	{
		id: 5,
		title: 'Car Repair',
		date: '28 Jun 2020 10:20',
		value: 500,
	},
]

const CardContentBody = () => {
	const [orderType, setorderType] = useState('AtoZ')
	const [fromLabel, setfromLabel] = useState('A')
	const [toLabel, settoLabel] = useState('Z')
	const [arrow, setarrow] = useState(<FaLongArrowAltDown />)
	const [sortedData, setsortedData] = useState(data)

	const sortArray = (type) => {
		if (type === 'AtoZ') {
			const sorted = data.sort((a, b) => {
				if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
				if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
				return 0
			})
			setsortedData(sorted)
		} else if (type === 'ZtoA') {
			const sorted = data.sort((a, b) => {
				if (a.title.toLowerCase() < b.title.toLowerCase()) return 1
				if (a.title.toLowerCase() > b.title.toLowerCase()) return -1
				return 0
			})
			setsortedData(sorted)
		} else if (type === 'MinValue') {
			const sorted = data.sort((a, b) => a.value - b.value)
			setsortedData(sorted)
		} else if (type === 'MaxValue') {
			const sorted = data.sort((a, b) => b.value - a.value)
			setsortedData(sorted)
		}
	}

	const handleInfoLabel = () => {
		if (orderType === 'AtoZ' || orderType === 'ZtoA') {
			setfromLabel('A')
			settoLabel('Z')
		} else if (orderType === 'MinValue' || orderType === 'MaxValue') {
			setfromLabel('Min')
			settoLabel('Max')
		}
	}
	const handleInfoArrow = () => {
		if (orderType === 'AtoZ' || orderType === 'MinValue') {
			setarrow(<FaLongArrowAltDown />)
		} else if (orderType === 'ZtoA' || orderType === 'MaxValue') {
			setarrow(<FaLongArrowAltUp />)
		}
	}
	return (
		<div className='cardContentBody'>
			<div className='contentBodyHeader'>
				<p className='title'>Recent Transaction</p>
				<div className='options'>
					<select
						onChange={(e) => {
							setorderType(e.target.value)
							sortArray(e.target.value)
						}}
						onClick={() => {
							handleInfoLabel()
							handleInfoArrow()
						}}
						defaultValue={'Sort By'}
					>
						<option value='Sort By' disabled>
							Sort By
						</option>
						<option value='AtoZ'> A to Z order </option>
						<option value='ZtoA'> Z to A order </option>
						<option value='MinValue'> Min Value </option>,
						<option value='MaxValue'> Max Value </option>
					</select>
					<div className='optInfo'>
						<div className='optInfoLabel'>
							<p>{fromLabel}</p>
							<p>{toLabel}</p>
						</div>
						{arrow}
					</div>
				</div>
			</div>
			<div className='contentBodyList'>
				{sortedData.map((item) => (
					<CardContentListItem
						key={item.id}
						title={item.title}
						date={item.date}
						value={item.value}
					/>
				))}
			</div>
		</div>
	)
}

export default CardContentBody
