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
import Input from '../../input'

// Data
import text from '../../../assets/i18n/es'
import portrait from '../../../assets/img/login.png'
import close from '../../../assets/img/close.png'

// Mock user
import user from '../../../../mock/user'

const Login = () => {

	const { screen_2: screen } = text

	// References
	const opacity = useRef(new Animated.Value(0)).current

	// Contexts
	const { isShow, isLogin, setShow, setLogin } = useContext(LoginContext)

	// States
	const [display, setDisplay] = useState('none')
	const [isProcess, setProcess] = useState(false)
	const [email, setEmail] = useState(null)
	const [pass, setPass] = useState(null)
	const [textBtn, setTextBtn] = useState(screen.btn_init)
	const [styleBtn, setStyleBtn] = useState(style.button)
	const [clear, setClear] = useState(false)

	const btnSetWarn = (isWarn = false) => {

		let text = 'btn_init'
		let styles = 'button'

		if (isWarn) {
			text = 'btn_error'
			styles = 'button_warn'
		}

		setTextBtn(screen[text])
		setStyleBtn(style[styles])
	}

	// Methods
	const loginSubmit = async () => {

		if (isProcess) return

		setProcess(true)

		if (email === user.email && pass === user.password) {

			let data = JSON.stringify({
				name: user.name,
				surname: user.surname
			})

			await AsyncStorage.setItem('user', data)

			setProcess(false)
			setEmail(null)
			setPass(null)
			setClear(true)
			setLogin(true)

			return
		}

		btnSetWarn(true)

		setTimeout(() => { btnSetWarn(false); setProcess(false) }, 2000)
	}

	const closeScreen = () => {
		setProcess(false)
		setEmail(null)
		setPass(null)
		setShow(false)
		setClear(true)
	}

	// Effects
	useEffect(() => {

		setClear(true)

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

		setTimeout(() => setDisplay('none'), 500)

	}, [isShow])

	return (
		<Animated.View style={[style.container, { opacity, display }]}>
			<ImageBackground style={style.portrait} resizeMode='cover' source={portrait} />
			<View style={style.center}>
				<TouchableOpacity style={style.close} onPress={closeScreen} >
					<Image style={style.closeIcon} source={close} />
				</TouchableOpacity>
				<View style={style.content}>
					<Text style={style.title}>{screen.title}</Text>
					<Text style={style.subtitle}>{screen.subtitle}</Text>
					<Input control={setEmail} clear={clear} required={true} placeholder='Correo electrónico' name='email' />
					<Input control={setPass} clear={clear} required={true} secureTextEntry={true} placeholder='Contraseña' name='pass' />
					<TouchableOpacity onPress={loginSubmit}>
						<View style={styleBtn}>
							<Text style={style.buttonText}>{textBtn}</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</Animated.View>
	)
}

export default Login