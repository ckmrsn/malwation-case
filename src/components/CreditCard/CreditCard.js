import React, { useEffect, useState } from 'react'
import './creditCard.scss'
import { FcSimCardChip } from 'react-icons/fc'
import { BiWifi2 } from 'react-icons/bi'
import { RiMastercardLine } from 'react-icons/ri'
import { GrVisa } from 'react-icons/gr'

const CreditCard = () => {
	const [cardType, setcardType] = useState('')
	const cardNumber = '1234123412341234'
	const cardNumberWithSpace = [...cardNumber]
		.map((d, i) => (i % 4 === 0 ? ' ' + d : d))
		.join('')
		.trim()

	useEffect(() => {
		setcardType('MasterCard')
	}, [])
	return (
		<div className='creditCard'>
			<div className='shadow'>
				<div className='shadow shadow2'></div>
			</div>
			<div className='cardIcons'>
				<FcSimCardChip
					style={{
						fontSize: 30,
					}}
				/>
				<BiWifi2
					style={{
						fontSize: 30,
						transform: 'rotate(90deg)',
						color: 'white',
						marginLeft: 2,
					}}
				/>
			</div>
			<p>{cardNumberWithSpace}</p>
			<div className='creditCardFooter'>
				<div className='holderInfo'>
					<p>Card Holder</p>
					<p>Ersin ÇAKMAK</p>
				</div>
				<div className='cardType'>
					{cardType === 'MasterCard' && (
						<>
							<RiMastercardLine
								style={{ color: 'white', fontSize: 50 }}
							/>
							{cardType}
						</>
					)}
					{cardType === 'Visa' && (
						<>
							<GrVisa style={{ color: 'white', fontSize: 50 }} />
							{cardType}
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default CreditCard
