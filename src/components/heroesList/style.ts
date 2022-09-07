import { StyleSheet } from 'react-native'

const styles: any =
{
	container: {
		height: '100%',
	},
	list: {
		width: '100%',
		height: '100%',
		display: 'flex',
	},
	item: {
		/*  aspectRatio: 1, */
		width: 160,
		flex: 1,
		marginRight: 15
	},
	itemContent: {
		height: 200,
		backgroundColor: 'blue',
		flex: 1,
		borderRadius: 10,
		overflow: 'hidden',
		position: 'relative'
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
		fontWeight: 'bold',
		opacity: 1,
		width: 110,
		position: 'absolute',
		zIndex: 2,
		left: 8,
		bottom: 8
	},
	titleList: {
		color: 'white',
	},
	subtitleList: {
		color: '#2196f3',
		paddingBottom: 10
	},
	itemBook: {
		position: 'absolute',
		backgroundColor: '#2196f3',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 5,
		overflow: 'hidden',
		paddingVertical: 2,
		paddingHorizontal: 5,
		top: 5,
		right: 5,
		zIndex: 1
	},
	itemNum: {
		marginLeft: 5,
		color: 'white',
		fontSize: 15,
	},
	bg: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		zIndex: 1
	},
	loading:
	{
		backgroundColor: '#171922',
		height: 35,
		borderRadius: 5,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 5,
	},
	spanLoading: {
		color: 'white',
		marginLeft: 10,
		fontSize: 15,
		opacity: .5
	},
	loadingHide: {
		height: 0,
		opacity: 0
	},

}

export default StyleSheet.create(styles)