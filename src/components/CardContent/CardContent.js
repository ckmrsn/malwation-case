import React from 'react'
import CardContentBody from '../CardContentBody/CardContentBody'
import CardContentHeader from '../CardContentHeader/CardContentHeader'
import CardHeaderItem from '../CardHeaderItem/CardHeaderItem'
import CreditCard from '../CreditCard/CreditCard'
import PaymentItem from '../PaymentItem/PaymentItem'
import { IoWalletOutline } from 'react-icons/io5'
import { RiPaypalLine } from 'react-icons/ri'
import './cardContent.scss'

const CardContent = () => {
	return (
		<div className='cardContent'>
			<CardContentHeader>
				<CardHeaderItem title='Dashboard'>
					<CreditCard />
				</CardHeaderItem>
				<CardHeaderItem title='Upcoming payments'>
					<PaymentItem
						icon={<IoWalletOutline />}
						title='Salary'
						subTitle='Belong Interactive'
						content='+$2000'
					/>
					<PaymentItem
						icon={<RiPaypalLine />}
						title='Paypal'
						subTitle='Freelance payment'
						content='$45:00'
					/>
				</CardHeaderItem>
			</CardContentHeader>
			<CardContentBody />
		</div>
	)
}

export default CardContent
