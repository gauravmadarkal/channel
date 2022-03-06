// clients searching for available channels
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
import ChannelIcon from '../../assets/icons/channel.png';
import RefreshIcon from '../../assets/icons/refresh.png';

const SearchingScreen = () => {
	const { channels, chooseChannel, getServerAddress } = useContext(GlobalContext);

	useEffect(() => {
		getServerAddress();
	}, []);

	return (
		<View style={style.searchingScreen}>
			<ActivityIndicator size='large' color='white' style={style.loader}/>
			<Text style={style.text}>
				Looking for available Channels
			</Text>
			<TouchableOpacity
				onPress={() => getServerAddress()}
				style={style.button}
			>
				<Image source={RefreshIcon} style={style.icon} />
			</TouchableOpacity>
			<View style={style.channels}>
				{channels.map((channel) => (
					<TouchableOpacity
						onPress={() => chooseChannel(channel)}
						style={style.channel}
					>
						<Image source={ChannelIcon} style={style.channel_image} />
						<Text>{channel.id}</Text>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
}

export default SearchingScreen;