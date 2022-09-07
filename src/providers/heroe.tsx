import { createContext, useState } from 'react'

const HeroeContext = createContext(null)

export function HeroeProvider({ children }: any) {

	const [isLoad, setLoad] = useState(false)
	const [isShow, setShow] = useState(false)
	const [content, setContent] = useState({})

	const value = {
		isShow,
		isLoad,
		content,
		setShow,
		setLoad,
		setContent
	}

	return (
		<HeroeContext.Provider value={value}>
			{children}
		</HeroeContext.Provider>
	)
}

export default HeroeContext