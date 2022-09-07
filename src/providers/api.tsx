import { createContext, useState, useEffect } from 'react'
import getHeroe from '../services/heroe'


const ApiRequestContext = createContext(null)

export function ApiRequestProvider({ children }: any) {

	const [state, setState] = useState(true)
	const [limit, setLimit] = useState(20)
	const [offset, setOffset] = useState(0)
	const [total, setTotal] = useState(0)
	const [heroes, setHeroes] = useState([])

	// TODO implementar la acción
	let actions = {
		heroes,
		limit,
		offset,
		setOffset,
	}

	const fetching = async () => {

		let data = await getHeroe({ offset, limit })

		if (!data) return

		const { total, results } = data

		let list = [...heroes, ...results]

		setHeroes(list)
		setLimit(limit)
		setTotal(total)
	}

	useEffect(() => {

		fetching()

	}, [offset])

	return (
		<ApiRequestContext.Provider value={{ state, ...actions }}>
			{children}
		</ApiRequestContext.Provider>
	)
}

export default ApiRequestContext