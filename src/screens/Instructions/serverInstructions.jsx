import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
	View,
	TouchableOpacity,
	Text,
	Image
} from 'react-native';
import { Screens } from '../../assets/constants';
import style from './style';
import ArrowIcon from '../../assets/icons/next.png';

const ServerInstructions = () => {
	const navigation = useNavigation();
	return (
		<View style={style.instructions}>
			<Text>Please turn on WI-FI hotspot on this device</Text>
			<TouchableOpacity  
				onPress={() => navigation.navigate(Screens.WaitingScreen)}
				style={style.button}
			>
				<Image source={ArrowIcon} style={style.icon} />
			</TouchableOpacity>
		</View>
	)
};

export default ServerInstructions;