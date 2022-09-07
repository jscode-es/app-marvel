import './src/env'

// Main content
import Main from './src/components/main'

// Extern module
import * as ScreenOrientation from 'expo-screen-orientation'
import { StatusBar } from 'react-native'

// Providers
import { LoginProvider } from './src/providers/login'
import { ApiRequestProvider } from './src/providers/api'
import { HeroeProvider } from './src/providers/heroe'

export default () => {

	ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
	StatusBar.setHidden(true)

	return (
		<LoginProvider>
			<ApiRequestProvider>
				<HeroeProvider>
					<Main />
				</HeroeProvider>
			</ApiRequestProvider>
		</LoginProvider>)
}