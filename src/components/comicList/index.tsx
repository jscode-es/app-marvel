import { Animated, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import { useEffect, useContext, useState, useRef, } from 'react'

import style from './style'

import Text from '../text'
import HeroeContext from '../../providers/heroe'

import getComic from '../../services/comic'

const ComicList = () => {

	const [comic, setComic] = useState([])
	const [idHeroe, setIdHeroe] = useState(0)
	const [offset, , setOffset]: any = useState(0)
	const [limit, setLimit]: any = useState(20)

	const { content } = useContext(HeroeContext)

	const fetching = async (id: number, offset: number) => {

		if (!id) return

		let data = await getComic({ id, offset, limit })

		if (!data) return

		let list = data

		setLimit(limit)
		setComic(list)
	}

	const renderItem = ({ item }) => {

		return (
			<View style={style.item}>
				<View style={style.itemContent}>
					<View style={style.itemContent}>
						<Image
							resizeMode='cover'
							style={style.itemImage}
							source={{
								uri: `${item?.thumbnail?.path}.${item?.thumbnail?.extension}`,
							}} />
					</View>
				</View>
			</View>)
	}

	const Comic = ({ comic }: any) => {
		return <FlatList
			style={style.list}
			data={comic}
			numColumns={2}
			renderItem={renderItem}
			keyExtractor={e => `comic_${idHeroe}_${e.id}`}
		/>
	}


	useEffect(() => {

		setComic([])

		let { id } = content

		if (!id) return

		if (idHeroe !== id) {

			setIdHeroe(id)
		}

		fetching(id, offset)

	}, [content, offset])

	return (
		<View style={style.container}>
			<Text type='span' style={style.titleList}>Listado de comics</Text>
			<Text type='small' style={style.subtitleList}>Una aventura  un sueño</Text>
			<Comic comic={comic} />
		</View>)
}

export default ComicList