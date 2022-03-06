import React from 'react';
import {
	View,
	Text,
	Image
} from 'react-native';
import style from './style';
import ViewerIcon from '../../assets/icons/viewer.png';

const Viewer = ({ name }) => {
	return (
		<View style={style.viewer}>
			<Image style={style.viewer_image} source={ViewerIcon} />
			<Text style={style.viewerName}>
				{name}
			</Text>
		</View>
	);
}

export default Viewer;