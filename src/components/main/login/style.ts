import { StyleSheet, Dimensions } from 'react-native'

const styles: any =
{
    flexRelative: {
        flex: 1,
        position: 'relative'
    },
    flexAbsolute: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        color: '#ffffff',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
    flexBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: Dimensions.get('screen').width,
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        marginHorizontal: 50,
        marginBottom: 10
    },
    subtitle: {
        color: 'white',
        opacity: .5,
        textAlign: 'center',
        marginBottom: 30
    },
    button: {
        backgroundColor: '#0a95ff',
        borderRadius: 15,
        paddingVertical: 5,
        marginHorizontal: 30,
        marginTop: 10,
        marginBottom: 50,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        height: 35,
        marginTop: 5
    },
    close:
    {
        backgroundColor: 'orange',
        height: 35,
        width: 35,
        position: 'absolute',
        top: 10,
        right: 10,
        borderRadius: 35
    },
    closeText: {
        textAlign: 'center',
        color: 'white'
    }
}

export default StyleSheet.create(styles)