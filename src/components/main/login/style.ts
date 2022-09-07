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
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	content: {
		width: '100%',
	},
	title: {
		color: 'white',
		textAlign: 'center',
		fontSize: 30,
		marginHorizontal: 30,
		marginBottom: 5
	},
	subtitle: {
		color: 'white',
		opacity: .5,
		textAlign: 'center',
		fontSize: 15,
		marginBottom: 35
	},
	button: {
		backgroundColor: '#0a95ff',
		borderRadius: 15,
		paddingVertical: 5,
		marginTop: 10,
		marginBottom: 20,
		width: '100%'
	},
	button_warn: {
		backgroundColor: '#ff9800',
		borderRadius: 15,
		paddingVertical: 5,
		marginTop: 10,
		marginBottom: 20,
		width: '100%'
	},
	buttonText: {
		textAlign: 'center',
		color: 'white',
		fontSize: 20,
		height: 35,
		marginTop: 5
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
		justifycontent: 'center'
	},
	closeIcon: {

		width: 20,
		height: 20,
		marginLeft: 12
	}

}

export default StyleSheet.create(styles)