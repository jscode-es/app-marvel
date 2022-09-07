import { useRef, useEffect } from 'react'
import { View, TextInput } from 'react-native'
import styles from './style'

const Input = ({ control, clear, ...restOfProps }) => {

	const ref = useRef(null)

	useEffect(() => {

		if (clear) ref.current.clear()

	}, [clear])

	return (
		<View style={styles.container}>
			<TextInput ref={ref} onChangeText={data => control(data.trim().toLowerCase())} {...restOfProps} />
		</View>)
}

export default Input