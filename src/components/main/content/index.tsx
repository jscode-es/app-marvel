import { View, Animated, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { useEffect, useContext, useState, useRef, } from 'react'

import style from './style'
import background from './img/background2.png'
import closeIcon from './img/arrow.png'
import thor from './img/thor.png'
import Text from '../../text'

import LoginContext from '../../../providers/src/login'
import HeroesList from '../../heroesList'
import Heroe from '../../heroe'

const Content = () => {

    const opacity = useRef(new Animated.Value(0)).current

    // Contexts
    const { isLogin, setLogin } = useContext(LoginContext)

    // States
    const [display, setDisplay] = useState('none')

    const close = () => {
        setLogin(false)
    }

    useEffect(() => {

        if (isLogin) {

            setDisplay('flex')

            let setting: Animated.TimingAnimationConfig = {
                toValue: 1,
                duration: 350,
                useNativeDriver: true
            }

            Animated.timing(opacity, setting).start()

            return
        }

        let setting: Animated.TimingAnimationConfig = {
            toValue: 0,
            duration: 350,
            useNativeDriver: true
        }

        Animated.timing(opacity, setting).start()

        setTimeout(() => {
            setDisplay('none')
        }, 500);

    }, [isLogin])


    return (

        <Animated.View style={[style.container, { opacity, display }]}>
            <ImageBackground style={style.flexRelative} resizeMode='cover' source={background} />
            <View style={style.top}>
                <View style={style.user}>
                    <View style={style.userBlock}>
                        <View style={style.profiler}>
                            <Image style={style.thor} source={thor} />
                        </View>
                        <View style={style.profilerDesc}>
                            <Text style={style.profilerName} type='h5'>Sergio</Text>
                            <Text style={style.profilerSurName} type='small'>GONZÁLEZ</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={close} style={style.closeIcon}>
                            <Image style={style.close} source={closeIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            <HeroesList />
            <Heroe />
        </Animated.View>

    )
}

export default Content