import React from 'react'
import './paymentItem.scss'

const PaymentItem = ({ icon, title, subTitle, content }) => {
	return (
		<div className='paymentItem'>
			<div className='paymentIcon'>{icon}</div>
			<p className='title'>{title}</p>
			<p className='subTitle'>{subTitle}</p>
			<p className='title'>{content}</p>
		</div>
	)
}

export default PaymentItem
