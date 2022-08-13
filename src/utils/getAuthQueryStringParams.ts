import { AuthQuery } from '../types/AuthQuery'

const getAuthQueryStringParams = (): AuthQuery => {

    //TODO: devolver los parametros de autenticación

    return {
        apikey: '',
        ts: '',
        hash: '',
    }
}

export default getAuthQueryStringParams