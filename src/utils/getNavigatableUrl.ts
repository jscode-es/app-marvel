import getAuthQueryStringParams from "./getAuthQueryStringParams"
import getPaginationQueryStringParams from "./getPaginationQueryStringParams"

export default (url: string) => {

    const newUrl = new URL(url)

    Object.entries({
        ...getAuthQueryStringParams(),
        ...getPaginationQueryStringParams(20, 1),
    }).forEach(([key, value]) => newUrl.searchParams.append(key, value))

    return newUrl.toString()
}