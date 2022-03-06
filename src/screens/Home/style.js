import { StyleSheet } from 'react-native';

const style = {
	home_background: {
		backgroundColor: 'black',
		color: 'white',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: "100%"
	},
	home_button: {
		width: 150,
		height: 150,
		maxWidth: 150,
		maxHeight: 150,
		padding: 10,
		margin: 10,
		borderRadius: 5,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		borderColor: 'white',
		borderWidth: 2,
		flexDirection: 'column',
	},
	icon: {
		width: 20,
		height: 20,
		margin: 10
	},
	text: {
		fontSize: 17
	},
	heading: {
		fontWeight: 'bold',
		fontSize: 25
	}
};

export default StyleSheet.create(style);