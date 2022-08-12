import { View, ImageBackground } from 'react-native'

import style from './style'
import logo from './img/preload.png'

const Preload = () => {

    return (
        <View style={style.flex}>
            <ImageBackground style={style.flex} resizeMode="cover" source={logo} />
        </View>
    )
}

export default Preload