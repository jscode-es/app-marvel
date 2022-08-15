import { View, FlatList, Image, TouchableOpacity } from 'react-native'
import { useContext } from 'react'

import style from './style'

import Text from '../text'
import book from './img/book.png'

import mock from './mock_result_api'
import HeroeContext from '../../providers/src/heroe'

/* export const useCachedRequests = (): [
    ApiRequestContextState<MarvelData>,
    IActions,
  ] => {
    return useContext(ApiRequestContext);
  }; */

const HeroesList = () => {

  const data = mock.data.results

  const {
    setShow,
    setLoad,
    setContent } = useContext(HeroeContext)

  const onEndReached = () => {
    console.log('Fin de la lista')
  }


  const renderItem = ({ item }) => {

    const clickItem = () => {
      setContent(item)
      setLoad(true)
      setShow(true)
    }

    return (
      <TouchableOpacity onPress={clickItem}>
        <View style={style.item}>
          <View style={style.itemContent}>
            <Image
              resizeMode='cover'
              style={style.itemImage}
              source={{
                uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
              }} />
          </View>
          <View style={style.itemTitle}>
            <Text type='span' style={style.itemName}>{item.name}</Text>
            <View style={style.itemBook}>
              <Image
                resizeMode='cover'
                style={style.itemIcon}
                source={book} />
              <Text type='small' style={style.itemNum}>{item.comics.returned | 0}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  /* const [state, actions] = useCachedRequests();
return (
  <View>
    <FlatList
      data={state.data}
      renderItem={() => <Text>TODO</Text>}
      onEndReached={actions.paginate}
    />
  </View>
); */

  return (
    <View style={style.container}>
      <Text type='span' style={style.titleList}>Listado de heroes</Text>
      <Text type='small' style={style.subtitleList}>El multiverso a tu alcance</Text>
      <FlatList
        style={style.list}
        data={data}
        numColumns={2}
        renderItem={renderItem}
        onEndReached={onEndReached}
        keyExtractor={e => e.id}
      />
    </View>)
}

export default HeroesList