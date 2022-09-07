import { AuthQuery } from '../types/AuthQuery'
import md5 from './md5'

const getAuthQueryStringParams = (): AuthQuery => {

	const { PUBLIC_KEY, PRIVATE_KEY } = (globalThis as any).env

	/* const ts = Date.now().toString() */
	const ts = '1'
	const hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`)

	return {
		apikey: PUBLIC_KEY,
		ts,
		hash
	}
}

export default getAuthQueryStringParams