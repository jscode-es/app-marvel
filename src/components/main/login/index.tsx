import { View, Animated, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { useEffect, useContext, useState, useRef, } from 'react'
import { useForm } from 'react-hook-form'

import Text from '../../text'
import Input from '../../input'
import login from './img/login.png'
import close from './img/close.png'
import style from './style'

import LoginContext from '../../../providers/src/login'

const Login = () => {

    const { control, handleSubmit } = useForm()
    // References
    const opacity = useRef(new Animated.Value(0)).current

    // Contexts
    const { isShow, isLogin, setShow, setLogin } = useContext(LoginContext)

    // States
    const [display, setDisplay] = useState('none')

    useEffect(() => {

        if (isShow) {

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

    }, [isShow])

    const loginSubmit = (data: any) => {

        //console.log('loginSubmit', data)
        console.log({
            setLogin
        })

        setLogin(true)
    }

    return (

        <Animated.View style={[style.blockLogin, { opacity, display }]}>
            <ImageBackground style={style.flexRelative} resizeMode='cover' source={login} />
            <View style={style.blockLogin}>
                <TouchableOpacity style={style.closeIcon} onPress={() => setShow(false)} >
                    <Image style={style.close} source={close} />
                </TouchableOpacity>
                <View style={style.flexBottom}>
                    <Text style={style.title}>Todo el mundo necesita un héroe</Text>
                    <Text style={style.subtitle} type='small'>Informate todo lo que hacen tus héroes</Text>
                    <Input control={control} required={true} placeholder='Correo electrónico' name='email' />
                    <Input control={control} required={true} secureTextEntry={true} placeholder='Contraseña' name='pass' />
                    <TouchableOpacity style={style.button} onPress={loginSubmit} /* onPress={handleSubmit(loginSubmit)} */>
                        <Text style={style.buttonText}>Acceder a tus comics</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Animated.View>

    )
}

export default Login