// Connected state
// Server will will choose a file

import React, {
	useContext,
	useEffect,
	useState
} from 'react';
import {
	View,
	TouchableOpacity,
	Text,
	Image
} from 'react-native';
import GlobalContext from '../../context/GlobalContext/GlobalContext';
import style from './style';
import MusicIcon from '../../assets/icons/music.png';
import MovieIcon from '../../assets/icons/movie.png';

const ChannellingScreen = () => {
	const { pickAudioFile, beginChannelling, chosenFile } = useContext(GlobalContext);

	useEffect(() => {
		console.log(chosenFile);
	}, [chosenFile]);

	return (
		<View style={style.channelling_screen}>
			<View style={style.row}>
				<TouchableOpacity 
					style={style.home_button}
					onPress={() => pickAudioFile()}
				>
					<Image source={MovieIcon} alt='Choose Movie' style={style.icon} />
					<Text style={style.text}>Watch Movie</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={style.home_button}
					onPress={() => pickAudioFile()}
				>
					<Image source={MusicIcon} alt='Choose Music' style={style.icon} />
					<Text style={style.text}>Play Music</Text>
				</TouchableOpacity>
			</View>

		</View>
	)
};

export default ChannellingScreen;