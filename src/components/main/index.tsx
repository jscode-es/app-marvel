import { View } from 'react-native'

import style from './style'

import Preload from './preaload'
import Login from './login'
/*import Content from './content' */

const Main = () => {

    return (
        <View style={style.container}>
            <Preload />
            <Login />
        </View>
    )
}

export default Main