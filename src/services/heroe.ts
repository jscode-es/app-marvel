import AsyncStorage from '@react-native-async-storage/async-storage'
import marvelProxy from '../utils/proxy'
import getNavigatableUrl from '../utils/getNavigatableUrl'

const getHeroe = async ({ offset = 0, limit = 0 }: any) => {

	let index = `heroe_${offset}`

	let data = await AsyncStorage.getItem(index)

	if (data) return JSON.parse(data)

	let url = getNavigatableUrl('https://gateway.marvel.com/v1/public/characters', { offset, limit })
	let result = await (marvelProxy as any).apiInstance.get(url)
	let { status, data: response } = result

	if (status !== 200) return false

	const dataJSON = JSON.stringify(response.data)

	await AsyncStorage.setItem(index, dataJSON)

	return response.data

}

export default getHeroe