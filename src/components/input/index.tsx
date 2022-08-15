import { View, TextInput } from 'react-native'
import { Controller } from 'react-hook-form'
import styles from './style'

const Input = ({ control, name, required = false, ...restOfProps }) => {

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name={name}
                rules={{ required }}
                render={({ field: { value, onChange, onBlur } }) => {
                    return <TextInput {...restOfProps} value={value} onChangeText={onChange} onBlur={onBlur} />
                }}
            />
        </View>)
}

export default Input