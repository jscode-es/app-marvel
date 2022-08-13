import { View, TextInput } from 'react-native'

import styles from './style'

const Input = ({ ...restOfProps }) => {

    return <View><TextInput style={styles.container} {...restOfProps} /></View>
}

export default Input