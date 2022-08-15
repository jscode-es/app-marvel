import { PaginationQuery } from "../types/PaginationQuery"

const getPaginationQueryStringParams = (maxResults: number, page: number): PaginationQuery => {

    //TODO: devolver los parametros de paginación para el 
    //listado de héroes con ${maxResults} resultados por página y página ${page}

    return {
        limit: '1',
        offset: '0'
    }
}

export default getPaginationQueryStringParams