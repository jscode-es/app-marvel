import { StyleSheet, Dimensions } from 'react-native'

const styles: any =
{
	container: {
		/* height: '50%' */
		height: '50%',
	},
	titleList: {
		color: 'white',
	},
	subtitleList: {
		color: '#2196f3',
		paddingBottom: 10
	},
	list: {
		/* width: '100%',
		height: 550,
		backgroundColor: 'red' */
		width: '100%',
		height: '100%',
		display: 'flex',
		flex: 1
	},
	item: {
		width: '100%',
		height: 300,
		flex: 1,
		padding: 10
		/* width: 160, */
		/* flex: 1, */
		/* marginRight: 15 */
	},
	itemContent: {
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
		opacity: .5,
		width: 110
	},


}

export default StyleSheet.create(styles)