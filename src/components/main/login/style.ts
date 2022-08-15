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
    closeIcon:
    {
        backgroundColor: 'orange',
        width: 45,
        height: 45,
        position: 'absolute',
        top: 20,
        right: 20,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifycontent: 'center'
    },
    close: {
        width: 20,
        height: 20,
        marginLeft: 12
    },
    blockLogin: {
        left: 0,
        bottom: 0,
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
}

export default StyleSheet.create(styles)