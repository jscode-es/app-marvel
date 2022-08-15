import { Animated, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import { useEffect, useContext, useState, useRef, } from 'react'

import style from './style'

import Text from '../text'
import closeIcon from './img/close.png'
import background from './img/fondo.png'
import HeroeContext from '../../providers/src/heroe'

import mock from './mock_result_comic'

const ComicList = () => {

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
            <Text type='span' style={style.itemName}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={style.container}>
      <Text type='span' style={style.titleList}>Listado de comics</Text>
      <Text type='small' style={style.subtitleList}>Una aventura  un sueño</Text>
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

export default ComicList