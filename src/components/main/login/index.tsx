import { View, Animated, Dimensions } from 'react-native'
import { useEffect, useContext, useState, useRef, } from 'react'

import style from './style'

import Text from '../../text'

import LoginContext from '../../../providers/src/login'
import PreloadContext from '../../../providers/src/preload'

const Login = () => {

    const fadeIn = useRef(new Animated.Value(0)).current

    const { isLogin, setLogin } = useContext(LoginContext)
    const { isHide } = useContext(PreloadContext)

    useEffect(() => {

        if (!isHide && !isLogin) {

            let setting: Animated.TimingAnimationConfig = {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }

            Animated.timing(fadeIn, setting).start()
        }

    }, [isHide, isLogin])

    let _style: any =
    {
        left: 0,
        bottom: 0,
        position: 'absolute',
        backgroundColor: 'red',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        opacity: fadeIn
    }

    return (

        <Animated.View style={_style}>
            <Text type='h1'>Login</Text>
        </Animated.View>

    )
}

export default Login