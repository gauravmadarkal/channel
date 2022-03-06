import { StyleSheet } from 'react-native';

const style = {
	loader: {
		margin: 20
	},
	waitingScreen: {
		flex: 1,
		height: '100%',
		backgroundColor: 'black',
		color: "white",
		// justifyContent: "center",
		alignItems: "center",
		flexDirection: 'column',
		padding: 10
	},
	text: {
		fontWeight: 'bold',
		fontSize: 20
	},
	viewers_block: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		margin: 20,
		width: '50%',
		flex: 1,
		grid: 1
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
	}
};

export default StyleSheet.create(style);