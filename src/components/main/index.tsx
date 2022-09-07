import { View } from 'react-native'

import style from './style'

import Preload from './preload'
import Login from './login'
import Content from './content'

const Main = () => {

	return (
		<View style={style.container}>
			<Preload />
			<Login />
			<Content />
		</View>
	)
}

export default Main