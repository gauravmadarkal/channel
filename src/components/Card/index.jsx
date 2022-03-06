import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import style from './style';


const Card = ({
	title,
	completionStatus
}) => {
	return (
		<TouchableOpacity style={[style.container, completionStatus === 0? style.notStarted: completionStatus < 100? style.pending : style.completed]}>
			<View style={style.content}>
				<Text style={style.title}>{title}</Text>
				<Text style={style.completionStatus}>Completed: {completionStatus}%</Text>
			</View>
			<View style={style.button}>
				<Text style={{ fontWeight: 'bold' }}>
					{completionStatus === 0? 'Start' : completionStatus < 100 ? 'Resume': 'Restart'}
				</Text>
			</View>
		</TouchableOpacity>
	)
};

export default Card;