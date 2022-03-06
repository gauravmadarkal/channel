import { StyleSheet } from 'react-native';

const style = {
	instructions: {
		flex: 1,
		height: '100%',
		backgroundColor: 'black',
		color: "white",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: 'column',
		padding: 10
	},
	button: {
		backgroundColor: 'gray',
		borderRadius: 50,
		padding: 10,
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20
	},
	icon: {
		width: 20,
		height: 20,
		bottom: 0
	},
	text: {
		fontWeight: 'bold',
		fontSize: 20,
		marginBottom: 30,
	},
};

export default StyleSheet.create(style);