import { Animated, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { useEffect, useContext, useState, useRef, } from 'react'

import style from './style'

import Text from '../text'
import closeIcon from './img/close.png'
import background from './img/fondo.png'
import HeroeContext from '../../providers/src/heroe'
import ComicList from '../comicList'

const Heroe = () => {

  const translateY = useRef(new Animated.Value(Dimensions.get('screen').height)).current

  const { isShow, isLoad, setLoad, setShow, content } = useContext(HeroeContext)

  console.log(content)

  // States
  const [display, setDisplay] = useState('none')

  const close = () => {
    setShow(false)
  }

  useEffect(() => {

    //if (!isLoad) return

    if (isShow) {

      setDisplay('flex')

      let setting: Animated.TimingAnimationConfig = {
        toValue: 0,
        duration: 350,
        useNativeDriver: true
      }

      Animated.timing(translateY, setting).start()

      setLoad(false)

      return
    }

    let setting: Animated.TimingAnimationConfig = {
      toValue: Dimensions.get('screen').height,
      duration: 350,
      useNativeDriver: true
    }

    Animated.timing(translateY, setting).start()

    setTimeout(() => {
      setDisplay('none')
    }, 500)

  }, [isShow, isLoad])

  const description = content.description || 'Descubre todos el contenido de este gran supehèroe'

  return (
    <Animated.View style={[style.container, {
      display,
      transform: [{ translateY }]
    }]}>
      <Image style={style.background} source={background} />
      <View style={style.top}>
        <Image style={style.portrait} source={{ uri: `${content?.thumbnail?.path}.${content?.thumbnail?.extension}` }} />
        <TouchableOpacity onPress={close} style={style.closeIcon}>
          <Image style={style.close} source={closeIcon} />
        </TouchableOpacity>
      </View>
      <View style={style.mid}>
        <Text type='h1' style={style.title}>{content.name}</Text>
        <Text type='p' style={style.description}>{description}</Text>
        <ComicList />
      </View>

    </Animated.View>)
}

export default Heroe