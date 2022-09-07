import { PaginationQuery } from "../types/PaginationQuery"

const getPaginationQueryStringParams = (maxResults: number = 20, page: number = 0): PaginationQuery => {

	//TODO: devolver los parametros de paginación para el 
	//listado de héroes con ${maxResults} resultados por página y página ${page}

	return {
		limit: String(maxResults),
		offset: String(maxResults * page)
	}
}

export default getPaginationQueryStringParams