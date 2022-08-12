import { Text } from 'react-native'

import styles from './style'

const Content = ({ children, type, style = {}, ...restOfProps }) => {

    const styleText = [
        styles.text,
        type === 'h1' && styles.h1,
        type === 'h2' && styles.h2,
        type === 'h3' && styles.h3,
        type === 'h4' && styles.h4,
        type === 'h5' && styles.h5,
        type === 'p' && styles.p,
        type === 'span' && styles.span,
        type === 'small' && styles.small,
        style
    ]

    return <Text style={styleText} {...restOfProps}>{children}</Text>
}

export default Content