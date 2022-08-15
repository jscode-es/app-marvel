import { create } from 'apisauce'
import { MarvelResponse } from '../types/marvel/MarvelResponse'
import { ApisauceInstance } from 'apisauce'

const target = {
    apiInstance: create({ baseURL: 'https://gateway.marvel.com' }),
    results: {}
}

const get = <T extends MarvelResponse>(target: { results: { [key in string]?: T } }, url: string) => {

    const values = target

    return new Promise<T>(async (res, rej) => {

        if (values.results.hasOwnProperty(url)) {
            res(values.results[url] as T)
            return
        }

        try {

            const response = await (target as {
                results: { [key in string]?: T };
                apiInstance: ApisauceInstance;
            }).apiInstance.get<T>(url)

            const { data } = response

            if (response.originalError?.response?.status !== 200 || !data) {
                throw new Error('Error fetching data')
            }

            (target as { results: { [key in string]?: T } }).results[url] = data

            return data

        } catch (error) { rej(error) }
    })
}

const set = (target: any, url: string, value: any) => {

    target.results[url] = value
    return true
}

const handler = { ...get, ...set }

const marvelProxy = new Proxy<MarvelResponse>(target, handler)

export default marvelProxy