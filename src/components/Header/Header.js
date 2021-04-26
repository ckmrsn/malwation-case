import React from 'react'
import './header.scss'
import { GoSearch } from 'react-icons/go'
import { IoMdNotificationsOutline } from 'react-icons/io'

const Header = () => {
	return (
		<div className='header'>
			<div className='logo'>Pay</div>
			<div className='searchBar'>
				<form>
					<GoSearch className='searchIcon' />
					<input type='text' autoComplete='off' placeholder='Search' />
				</form>
			</div>
			<div className='options'>
				<span className='lang'>
					<select id='languages'>
						<option value='EN'>EN</option>
						<option value='EN'>EN</option>
						<option value='FR'>FR</option>
						<option value='DE'>DE</option>
					</select>
				</span>
				<span className='notification'>
					<span className='round'></span>
					<IoMdNotificationsOutline className='notificationIcon' />
				</span>
			</div>
			<div className='avatar'>
				<img
					src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
					alt='avatar'
				/>
			</div>
		</div>
	)
}

export default Header
