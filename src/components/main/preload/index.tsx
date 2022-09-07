// Mandatori module
import { useEffect, useContext, useState } from 'react'
import { View, ImageBackground, TouchableOpacity } from 'react-native'

// Style component
import style from './style'

// Contexts
import LoginContext from '../../../providers/login'

// Components
import Text from '../../text'

// Data
import text from '../../../assets/i18n/es'
import portrait from '../../../assets/img/portrait.png'

const Preload = () => {

	// Content text
	const { screen_1: screen } = text

	// Contexts
	const { setShow } = useContext(LoginContext)

	return (
		<View style={style.container}>
			<ImageBackground style={style.portrait} resizeMode="cover" source={portrait} />
			<View style={style.center}>
				<View style={style.content}>
					<Text style={style.title}>{screen.title}</Text>
					<Text style={style.subtitle}>{screen.subtitle}</Text>
					<TouchableOpacity onPress={() => setShow(true)}>
						<View style={style.button}>
							<Text style={style.buttonText}>{screen.btn_init}</Text>
						</View>
					</TouchableOpacity>
					{/* <TouchableOpacity style={style.buttonRegister} onPress={() => setShow(true)}>
						<Text style={style.buttonRegisterText}>{screen.btn_register}</Text>
					</TouchableOpacity> */}
				</View>
			</View>
		</View>
	)
}

export default Preload