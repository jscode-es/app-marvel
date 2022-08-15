import type { Config } from '@jest/types'


const config: Config.InitialOptions = {
    preset: "react-native",
    verbose: true,
    setupFiles: ["dotenv/config"],
    /* transform: {
        '^.+\\.tsx?$': 'ts-jest',
    }, */
    /*  moduleNameMapper: {
         '^react-native$': 'react-native-web',
         '^react-native-config$': 'react-native-config',
     } */
    transformIgnorePatterns: [
        "node_modules/(?!(@react-native|react-native)/)"
    ]
}

export default config