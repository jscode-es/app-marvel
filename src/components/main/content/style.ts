import { StyleSheet, Dimensions } from 'react-native'

const MARGIN = 50

const styles: any =
{
	portrait: {
		position: 'absolute',
		width: '100%',
		height: '100%',
	},
	container: {
		flex: 1,
		backgroundColor: '#100C1B',
		position: 'absolute',
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	center: {
		width: Dimensions.get('window').width - MARGIN,
		height: Dimensions.get('window').height - MARGIN,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start'
	},
	close: {
		backgroundColor: 'orange',
		width: 45,
		height: 45,
		position: 'absolute',
		top: 0,
		right: 0,
		borderRadius: 10,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifycontent: 'center',
		zIndex: 1
	},
	closeIcon: {

		width: 20,
		height: 20,
		marginLeft: 12
	},
	top:
	{
		height: '30%'
	},
	mid:
	{
		height: '70%'
	},
	welcome:
	{
		color: 'white',
		opacity: .8
	},
	user: {
		color: 'white',
		fontWeight: 'bold'
	}
}

export default StyleSheet.create(styles)