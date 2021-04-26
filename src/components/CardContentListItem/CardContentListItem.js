import React from 'react'
import './cardContentListItem.scss'
import { AiOutlineGift } from 'react-icons/ai'
import { RiShoppingBasket2Line } from 'react-icons/ri'
import { CgGym } from 'react-icons/cg'
import { MdLocalLaundryService } from 'react-icons/md'
import { BiCar } from 'react-icons/bi'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { useOutsideAlert } from '../../hooks/outsideAlert'

const CardContentListItem = ({ title, date, value }) => {
	const { visible, setvisible, ref } = useOutsideAlert()

	const selectIcon = (title) => {
		if (title === 'Shopping') {
			return <AiOutlineGift />
		} else if (title === 'Grocery') {
			return <RiShoppingBasket2Line />
		} else if (title === 'Gym') {
			return <CgGym />
		} else if (title === 'Laundry') {
			return <MdLocalLaundryService />
		} else if (title === 'Car Repair') {
			return <BiCar />
		}
	}

	const handleVisible = () => {
		setvisible(!visible)
	}

	return (
		<div className='cardContentListItem'>
			<div className='icon'>{selectIcon(title)}</div>
			<div className='item title'>{title}</div>
			<div className='item date'>{date}</div>
			<div className='item value'>${value}</div>
			<div className='option'>
				{visible && (
					<ul ref={ref} className='optionList'>
						<li>Apple pay</li>
						<li>Transfer to account</li>
						<li>Report for transaction</li>
					</ul>
				)}
				<HiOutlineDotsVertical
					onClick={handleVisible}
					className='optionIcon'
				/>
			</div>
		</div>
	)
}

export default CardContentListItem
