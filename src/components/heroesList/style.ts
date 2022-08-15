import { StyleSheet } from 'react-native'

const styles: any =
{
    container: {

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
        margin: 10,
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
    titleList: {
        color: 'white',
        marginLeft: 25
    },
    subtitleList: {
        marginLeft: 25,
        color: '#2196f3',
        paddingBottom: 10
    },
    itemBook: {
        backgroundColor: '#2196f3',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        paddingVertical: 2,
        paddingHorizontal: 5
    },
    itemNum: {
        marginLeft: 5,
        color: 'white',
        fontSize: 15,
    }

}

export default StyleSheet.create(styles)