import { StyleSheet, Text, View } from 'react-native'

import Providers from '../../providers'

import { LoginProvider } from '../../providers/src/login'

const Main = () => {

    const providers = [
        <LoginProvider key='loginProvider' />
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