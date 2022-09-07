import { StyleSheet, Dimensions } from 'react-native'

const styles: any =
{
	container: {
		flex: 1,
		position: 'absolute',
		//backgroundColor: '#110b1d',
		backgroundColor: 'red',
		bottom: 0,
		left: 0,
		color: '#ffffff',
		width: Dimensions.get('screen').width,
		height: Dimensions.get('screen').height,
		zIndex: 2,

	},
	top: {
		height: 550,
		width: '100%',
		position: 'relative'
	},
	portrait: {
		width: '100%',
		height: '100%'
	},
	closeIcon:
	{
		backgroundColor: 'orange',
		width: 45,
		height: 45,
		position: 'absolute',
		top: 90,
		right: 20,
		borderRadius: 10,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifycontent: 'center',
		zIndex: 2
	},
	close: {
		width: 20,
		height: 20,
		marginLeft: 12
	},
	background: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: 1
	},
	mid: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		padding: 30,
		zIndex: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start'
	},
	title: {
		paddingTop: 250,
		color: 'white'
	},
	description: {
		color: 'white',
		fontSize: 20,
		marginBottom: 20
	},
	listName:
	{
		color: 'white'
	},
	list: {

	}

}

export default StyleSheet.create(styles)