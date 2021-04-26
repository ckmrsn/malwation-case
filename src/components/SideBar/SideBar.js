import React, { useState } from 'react'
import './sidebar.scss'
import SideBarItem from '../SiderBarItem/SideBarItem'
import {
	AiFillHome,
	AiFillMessage,
	AiOutlineHome,
	AiOutlineMessage,
} from 'react-icons/ai'
import {
	IoCloudUploadOutline,
	IoCloudUploadSharp,
	IoMailOutline,
	IoMailSharp,
	IoSettingsOutline,
	IoSettingsSharp,
} from 'react-icons/io5'
import { RiUser3Fill, RiUser3Line } from 'react-icons/ri'

const SideBar = () => {
	const [active, setactive] = useState('Home')

	const handleActive = (id) => {
		setactive(id)
	}
	return (
		<div className='sideBar'>
			<SideBarItem
				icon={active === 'Home' ? <AiFillHome /> : <AiOutlineHome />}
				handleActive={handleActive}
				name='Home'
			/>
			<SideBarItem
				icon={active === 'Mail' ? <IoMailSharp /> : <IoMailOutline />}
				handleActive={handleActive}
				name='Mail'
			/>
			<SideBarItem
				icon={
					active === 'Message' ? <AiFillMessage /> : <AiOutlineMessage />
				}
				handleActive={handleActive}
				name='Message'
			/>
			<SideBarItem
				icon={active === 'User' ? <RiUser3Fill /> : <RiUser3Line />}
				handleActive={handleActive}
				name='User'
			/>
			<SideBarItem
				icon={
					active === 'Upload' ? (
						<IoCloudUploadSharp />
					) : (
						<IoCloudUploadOutline />
					)
				}
				handleActive={handleActive}
				name='Upload'
			/>
			<SideBarItem
				icon={
					active === 'Settings' ? (
						<IoSettingsSharp />
					) : (
						<IoSettingsOutline />
					)
				}
				handleActive={handleActive}
				name='Settings'
			/>
		</div>
	)
}

export default SideBar
