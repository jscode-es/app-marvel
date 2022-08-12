import { StyleSheet, Text, View } from 'react-native'

import Providers from '../../providers'

import { LoginProvider } from '../../providers/src/login'
import { ApiRequestProvider } from '../../providers/src/api'

const Main = () => {

    const providers = [
        <LoginProvider key='loginProvider' />,
        <ApiRequestProvider key='apiRequestProvider' />
    ]

    return (
        <Providers providers={providers}>
            <View>
                <Text>Main</Text>
            </View>
        </Providers>
    )
}

export default Main