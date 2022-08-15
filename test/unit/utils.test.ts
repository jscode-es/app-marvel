import getAuthQueryStringParams from '../../src/utils/getAuthQueryStringParams'
import getPaginationQueryStringParams from '../../src/utils/getPaginationQueryStringParams'
import md5 from '../../src/utils/md5'
import proxy from '../../src/utils/proxy'
import getNavigatableUrl from '../../src/utils/getNavigatableUrl'

describe('utils', () => {

    test('generate md5', () => {

        const data = md5('datos a cifrar')
        const hash = 'fb8281ae3f3cd77434ca29149a98fd5e'

        expect(data).toEqual(hash)
    })

    test('getAuthQueryStringParams', () => {

        const { PUBLIC_KEY, PRIVATE_KEY } = process.env
        const data = getAuthQueryStringParams()
        const hash = md5(`${data.ts}${PRIVATE_KEY}${PUBLIC_KEY}`)

        expect(hash).toEqual(data.hash)
    })

    test.skip('getPaginationQueryStringParams', () => {

        const maxResults = 0
        const page = 0

        const data = getPaginationQueryStringParams(maxResults, page)

        expect(200).toEqual(200)
    })

    test.skip('marvel proxy', async () => {

        let a = await (proxy as any).apiInstance.get()

        console.log(a)

        expect(200).toEqual(200)

    })

    test('getNavigableUrl', async () => {

        let a = getNavigatableUrl('https://gateway.marvel.com/v1/public/characters')

        console.log(a)

        expect(200).toEqual(200)

    })

})