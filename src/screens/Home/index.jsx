import React from 'react';
import { 
	View,
	TouchableOpacity,
	Text,
	Image
} from 'react-native';
import style from './style';
import AddIcon from '../../assets/icons/plus.png';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../assets/constants';

const Home = () => {
	const navigation = useNavigation();
	return (
		<View style={style.home_background}>
			<Text style={style.heading}>Let's get streaming!!</Text>
			<TouchableOpacity 
				style={style.home_button}
				onPress={() => navigation.navigate(Screens.ServerInstructionsScreen)}
			>
				<Image source={AddIcon} alt='Create room' style={style.icon} />
				<Text style={style.text}>Create a Channel</Text>
			</TouchableOpacity>
			<TouchableOpacity 
				style={style.home_button}
				onPress={() => navigation.navigate(Screens.ClientInstructionsScreen)}
			>
				<Image source={AddIcon} alt='Join room' style={style.icon} />
				<Text style={style.text}>Join Channel</Text>
			</TouchableOpacity>
		</View>
	)
};

export default Home;