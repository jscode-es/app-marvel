// Mandatori module
import { useEffect, useContext, useState, useRef } from 'react'
import { View, ImageBackground, Image, TouchableOpacity, Animated } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Style component
import style from './style'

// Contexts
import LoginContext from '../../../providers/login'

// Components
import Text from '../../text'
import HeroesList from '../../heroesList'
import Heroe from '../../heroe'

// Data
import text from '../../../assets/i18n/es'
import portrait from '../../../assets/img/content.png'
import close from '../../../assets/img/arrow.png'

const Content = () => {

	const { screen_3: screen } = text

	const opacity = useRef(new Animated.Value(0)).current

	// Contexts
	const { isLogin, setLogin } = useContext(LoginContext)

	// States
	const [display, setDisplay] = useState('none')
	const [fullName, setFullName] = useState('')

	//Effects
	useEffect(() => {

		if (isLogin) {

			AsyncStorage.getItem('user').then((data: any) => {
				let user = JSON.parse(data)
				setFullName(`${user.name} ${user.surname}`)
			})

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

		setTimeout(() => setDisplay('none'), 500)

	}, [isLogin])

	return (
		<Animated.View style={[style.container, { opacity, display }]}>
			<Heroe />
			<ImageBackground style={style.portrait} resizeMode='cover' source={portrait} />
			<View style={style.center}>
				<TouchableOpacity style={style.close} onPress={() => setLogin(false)} >
					<Image style={style.closeIcon} source={close} />
				</TouchableOpacity>
				<View style={style.content}>
					<View style={style.top}>
						<Text style={style.welcome}>Bienvenido</Text>
						<Text style={style.user}>{fullName}</Text>
					</View>
					<View style={style.mid}>
						<HeroesList />
					</View>
				</View>
			</View>
		</Animated.View>
	)
}

export default Content