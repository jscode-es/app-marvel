import getAuthQueryStringParams from "./getAuthQueryStringParams"
import getPaginationQueryStringParams from "./getPaginationQueryStringParams"

export default (url: string, { offset, limit }) => {

	const newUrl = new URL(url)

	Object.entries({
		...getAuthQueryStringParams(),
		...getPaginationQueryStringParams(limit, offset),
	}).forEach(([key, value]) => newUrl.searchParams.append(key, value))

	return newUrl.toString().replace('/?', '?')
}