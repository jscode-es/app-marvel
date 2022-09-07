import { View, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useContext, useEffect, useState } from 'react'

import style from './style'

import Text from '../text'
import book from '../../assets/img/book.png'
import bg from '../../assets/img/bg.png'
import bgEmpty from '../../assets/img/bg_marvel.png'

import mock from '../../../mock/mock_result_api'
import HeroeContext from '../../providers/heroe'
import ApiRequestContext from '../../providers/api'

/* export const useCachedRequests = (): [
	ApiRequestContextState<MarvelData>,
	IActions,
  ] => {
	return useContext(ApiRequestContext);
  }; */

const HeroesList = () => {

	const data = mock.data.results

	const [display, setDisplay] = useState('none')

	const {
		setShow,
		setLoad,
		setContent } = useContext(HeroeContext)

	const { heroes, setOffset, offset, limit } = useContext(ApiRequestContext)

	const onEndReached = () => {

		console.log('Fin de la lista', { offset, limit })
		setDisplay('flex')
		setOffset(offset + 1)
	}

	useEffect(() => {
		setDisplay('none')
	}, [heroes])


	const renderItem = ({ item }) => {

		const clickItem = () => {
			setContent(item)
			setLoad(true)
			setShow(true)
		}

		let uri = `${item.thumbnail.path}.${item.thumbnail.extension}`

		const isNotAvailable = item.thumbnail.path.includes('image_not_available')

		return (
			<TouchableOpacity onPress={clickItem}>
				<View style={style.item}>
					<View style={style.itemContent}>
						<View style={style.itemBook}>
							<Image
								resizeMode='cover'
								style={style.itemIcon}
								source={book} />
							<Text type='small' style={style.itemNum}>{item.comics.returned | 0}</Text>
						</View>
						<Text type='span' style={style.itemName}>{item.name}</Text>
						<Image
							resizeMode='cover'
							style={style.itemImage}
							source={isNotAvailable ? bgEmpty : { uri }} />
						<Image style={style.bg} source={bg} />
					</View>
				</View>
			</TouchableOpacity>
		)
	}

	return (
		<View style={style.container}>
			<Text type='span' style={style.titleList}>Listado de heroes</Text>
			<Text type='small' style={style.subtitleList}>El multiverso a tu alcance</Text>
			<FlatList
				style={style.list}
				data={heroes}
				numColumns={2}
				renderItem={renderItem}
				onEndReached={onEndReached}
				ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
				keyExtractor={e => e.id}
			/>
			<View style={[style.loading, { display }]}>
				<ActivityIndicator />
				<Text type='span' style={style.spanLoading}>{'Añadiendo más heroes'.toUpperCase()}</Text>
			</View>
		</View>)
}

export default HeroesList