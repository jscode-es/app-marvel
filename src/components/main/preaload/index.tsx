import { useEffect, useContext, useState } from 'react'
import { View, ImageBackground, TouchableOpacity, Alert } from 'react-native'

import style from './style'
import logo from './img/portrait.png'
import Text from '../../text'

import LoginContext from '../../../providers/src/login'

const Preload = () => {

    const { setShow } = useContext(LoginContext)

    const openLogin = () => setShow(true)

    return (
        <View style={style.flexRelative}>
            <ImageBackground style={style.flexRelative} resizeMode="cover" source={logo} />
            <View style={style.flexAbsolute}>
                <View style={style.flexBottom}>
                    <Text style={style.title}>Mira tus cómics favoritos de Marvel</Text>
                    <Text style={style.subtitle} type='small'>Inicia sesión para disfrutar del contenido</Text>
                    <TouchableOpacity style={style.button} onPress={openLogin}>
                        <Text style={style.buttonText}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Preload