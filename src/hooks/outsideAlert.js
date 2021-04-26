import { useEffect, useRef, useState } from 'react'

export const useOutsideAlert = (initialValue) => {
	const ref = useRef(null)
	const [visible, setvisible] = useState(initialValue)
	const handleClickOutside = (e) => {
		if (ref.current && !ref.current.contains(e.target)) setvisible(false)
	}
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
	}, [ref])
	return { visible, setvisible, ref }
}
