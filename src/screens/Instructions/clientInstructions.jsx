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

const ClientInstructions = () => {
	const navigation = useNavigation();
	return (
		<View style={style.instructions}>
			<Text style={style.text}>Connect to the server's hotspot</Text>
			<TouchableOpacity  
				onPress={() => navigation.navigate(Screens.SearchingScreen)}
				style={style.button}
			>
				<Image source={ArrowIcon} style={style.icon} />
				{/* <Text>Let's Begin</Text> */}
			</TouchableOpacity>
		</View>
	)
};

export default ClientInstructions;