import { StyleSheet } from 'react-native';

const style = {
	loader: {
		margin: 20
	},
	searchingScreen: {
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
	channels: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		margin: 40,
		width: '50%',
		flex: 1,
		grid: 1
	},
	channel: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	channel_image: {
		width: 70,
		height: 70
	},
};

export default StyleSheet.create(style);