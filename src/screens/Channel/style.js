import {
	StyleSheet
} from 'react-native';

const style = {
	channelling_screen: {
		flex: 1,
		height: '100%',
		backgroundColor: 'black',
		color: "white",
		alignItems: "center",
		flexDirection: 'column',
		padding: 10,
		paddingTop: 30
	},
	row: {
		// flex: 1,
		flexDirection: 'row'
	},
	home_button: {
		width: 150,
		height: 150,
		maxWidth: 150,
		maxHeight: 150,
		padding: 10,
		margin: 10,
		borderRadius: 5,
		// flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'white',
		borderWidth: 2,
		flexDirection: 'column',
		backgroundColor: 'white'
	},
	icon: {
		width: 50,
		height: 50,
		margin: 10
	},
	text: {
		fontSize: 17,
		color: 'black'
	},
	begin: {
		borderRadius: 2,
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 10,
		paddingBottom: 10,
		backgroundColor: "gray",
		color: 'black',
		margin: 30
	}
};

export default StyleSheet.create(style);