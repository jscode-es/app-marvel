import Main from './src/components/main'
import * as ScreenOrientation from 'expo-screen-orientation'

import { LoginProvider } from './src/providers/src/login'
import { ApiRequestProvider } from './src/providers/src/api'

export default () => {

    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)

    return (
        <LoginProvider>
            <ApiRequestProvider>
                <Main />
            </ApiRequestProvider>
        </LoginProvider>)
}