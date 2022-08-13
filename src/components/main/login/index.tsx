import { View, Animated, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import { useEffect, useContext, useState, useRef, } from 'react'

import Text from '../../text'
import Input from '../../input'
import login from './img/login.png'
import style from './style'

import LoginContext from '../../../providers/src/login'

const Login = () => {

    // References
    const fadeIn = useRef(new Animated.Value(0)).current

    // Contexts
    const { isShow, isLogin, setShow } = useContext(LoginContext)

    // States
    const [display, setDisplay] = useState('none')

    useEffect(() => {

        if (isShow) {

            setDisplay('flex')

            let setting: Animated.TimingAnimationConfig = {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }

            Animated.timing(fadeIn, setting).start()

            return
        }



        let setting: Animated.TimingAnimationConfig = {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }

        Animated.timing(fadeIn, setting).start()

        setTimeout(() => {
            setDisplay('none')
        }, 500);

    }, [isShow])

    let styleAnimated: any =
    {
        left: 0,
        bottom: 0,
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        opacity: fadeIn,
        display
    }

    let styleBlockLogin: any =
    {
        left: 0,
        bottom: 0,
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        bacgroundColor: 'red',
    }




    return (

        <Animated.View style={styleAnimated}>
            <ImageBackground style={style.flexRelative} resizeMode="cover" source={login} />
            <View style={styleBlockLogin}>
                <TouchableOpacity style={style.close} onPress={() => setShow(false)} >
                    <Text style={style.closeText}>X</Text>
                </TouchableOpacity>
                <View style={style.flexBottom}>
                    <Text style={style.title}>Todo el mundo necesita un héroe</Text>
                    <Text style={style.subtitle} type='small'>Informate todo lo que hacen tus héroes</Text>
                    <Input placeholder='Correo electrónico' name='email' />
                    <Input placeholder='Contraseña' name='pass' />
                    <TouchableOpacity style={style.button} >
                        <Text style={style.buttonText}>Acceder a tus comics</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Animated.View>

    )
}

export default Login