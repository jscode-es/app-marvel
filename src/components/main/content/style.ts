import { StyleSheet, Dimensions } from 'react-native'

const styles: any =
{
    container: {
        flex: 1,
        position: 'absolute',
        backgroundColor: '#110b1d',
        bottom: 0,
        left: 0,
        color: '#ffffff',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
    top: {
        height: 250,
        width: '100%',
        position: 'relative'
    },
    flexRelative: {
        left: 0,
        bottom: 0,
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    user: {
        position: 'absolute',
        top: 90,
        paddingHorizontal: 20,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
        /*  align-items: flex-start; */
    },
    userBlock: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    profiler: {
        backgroundColor: '#172631',
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10
    },
    profilerDesc: {

    },
    profilerName: {
        color: 'white',
        fontSize: 15,
        opacity: .8
    },
    profilerSurName: {
        color: 'white',
        fontSize: 20
    },
    closeIcon: {
        backgroundColor: 'orange',
        width: 45,
        height: 45,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifycontent: 'center'
    },
    close: {
        width: 30,
        height: 30,
        marginLeft: 8
    },
    thor: {
        width: 50,
        height: 50,
    }
}

export default StyleSheet.create(styles)