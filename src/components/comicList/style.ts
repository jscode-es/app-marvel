import { StyleSheet, Dimensions } from 'react-native'

const styles: any =
{
    container: {
        height: '50%'
    },
    titleList: {
        color: 'white',
    },
    subtitleList: {
        color: '#2196f3',
        paddingBottom: 10
    },
    list: {
        width: '100%',
        height: 550,
        paddingHorizontal: 10
    },
    item: {
        /*  aspectRatio: 1, */
        width: '100%',
        flex: 1,
    },
    itemContent: {

        height: 200,
        backgroundColor: 'blue',
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden'
    },
    itemImage: {
        height: '100%',
        width: '100%'
    },
    itemTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 15
    },
    itemName: {
        color: 'white',
        fontSize: 15,
        opacity: .5,
        width: 110
    },

}

export default StyleSheet.create(styles)