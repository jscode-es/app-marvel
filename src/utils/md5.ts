//import crypto from 'crypto'
import md5 from 'react-native-md5'

export default (data: string) => md5.hex_md5(data)