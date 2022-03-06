import React from 'react';
import { 
	View,
	Text
} from 'react-native';
import style from './style';

const Splashscreen = () => {
	return (
		<View style={style.splashscreen}>
			<Text style={style.text}>CHANNEL</Text>
		</View>
	)
};

export default Splashscreen;