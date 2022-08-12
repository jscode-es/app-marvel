import { View } from 'react-native'

import style from './style'

import Providers from '../../providers'

import { LoginProvider } from '../../providers/src/login'
import { ApiRequestProvider } from '../../providers/src/api'

import Preload from './preaload'
import Login from './login'
import Content from './content'

const Main = () => {

    const providers = [
        <LoginProvider key='loginProvider' />,
        <ApiRequestProvider key='apiRequestProvider' />
    ]

    return (
        <Providers providers={providers}>
            <View style={style.container}>
                <Preload />
            </View>
        </Providers>
    )
}

export default Main