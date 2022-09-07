import AsyncStorage from '@react-native-async-storage/async-storage'
import marvelProxy from '../utils/proxy'
import getNavigatableUrl from '../utils/getNavigatableUrl'

const parseComic = (data: any) => {

	let { results } = data

	let override = results.map((item: any) => {
		return { id: item.id, thumbnail: item.thumbnail }
	})

	return override
}

const getComic = async ({ id, offset = 0, limit = 0 }: any) => {

	if (!id) return { result: [], total: 0 }

	let index = `comic_${id}_${offset}`

	let data = await AsyncStorage.getItem(index)

	if (data) return JSON.parse(data)

	let url = getNavigatableUrl(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics`, { offset, limit })

	console.log('url', url)

	let result = await (marvelProxy as any).apiInstance.get(url)
	let { status, data: response } = result

	if (status !== 200) return false

	const dataJSON = JSON.stringify(parseComic(response.data))

	await AsyncStorage.setItem(index, dataJSON)

	return response.data

}

export default getComic