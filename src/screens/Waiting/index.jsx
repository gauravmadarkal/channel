// server waiting for clients to join
// show connected clients

import React, {
	useContext,
	useEffect
} from 'react';
import { 
	View,
	Text,
	ActivityIndicator,
	TouchableOpacity,
	Image
} from 'react-native';
import GlobalContext from '../../context/GlobalContext/GlobalContext';
import style from './style';
import ArrowIcon from '../../assets/icons/next.png';
import Viewer from '../../components/Viewer';
import { startTransmission } from '../../js/server';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../assets/constants';

const WaitingScreen = () => {
	const { viewers, createServer } = useContext(GlobalContext);
	const navigation = useNavigation()
	
	useEffect(() => {
		createServer()
	}, []);

	return (
		<View style={style.waitingScreen}>
			<ActivityIndicator size='large' color='white' style={style.loader}/>
			<Text style={style.text}>
				Channel Initiated
			</Text>
			<Text>
				waiting for viewers...
			</Text>
			<View style={style.viewers_block}>
				{viewers.map((viewer) => (
					<Viewer name={viewer.name} />
				))}
			</View>
			<TouchableOpacity  
				onPress={() => navigation.navigate(Screens.ChannelScreen)}
				style={style.button}
			>
				<Image source={ArrowIcon} style={style.icon} />
				{/* <Text>Let's Begin</Text> */}
			</TouchableOpacity>
		</View>
	)
};

export default WaitingScreen;