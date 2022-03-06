import { StyleSheet } from 'react-native';
import { colors } from '../../assets/variables';

const style = {
	container: {
		borderRadius: 10,
		margin: 10,
		flex: 1,
		alignItems: 'center',
		elevation: 3,
		backgroundColor: '#e0f7fa'
	},
	content: {
		flexDirection: 'column'
	},
	title: {
		fontSize: 17,
		fontWeight: 'bold',
		maxWidth: 100,
		margin: 10,
		marginBottom: 0
	},
	completionStatus: {
		fontSize: 13,
		color: colors.black,
		margin: 10,
	},
	button: {
		height: 30,
		backgroundColor: colors.info,
		width: '100%',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10
	},
	completed: {
		backgroundColor: colors.success,
	}
};

export default StyleSheet.create(style);