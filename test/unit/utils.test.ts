import getAuthQueryStringParams from '../../src/utils/getAuthQueryStringParams'
import getPaginationQueryStringParams from '../../src/utils/getPaginationQueryStringParams'

describe('Utilidades', () => {

    test('getAuthQueryStringParams', () => {

        const data = getAuthQueryStringParams()

        expect(200).toEqual(200)
    })

    test('getPaginationQueryStringParams', () => {

        const maxResults = 0
        const page = 0

        const data = getPaginationQueryStringParams(maxResults, page)

        expect(200).toEqual(200)
    })

})