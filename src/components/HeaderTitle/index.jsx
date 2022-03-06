import React, { useContext } from 'react';
import { Text } from 'react-native';
import { colors } from '../../assets/variables';
import GlobalContext from '../../context/GlobalContext/GlobalContext';

const HeaderTitle = ({ title }) => {
	const { profileDetails } = useContext(GlobalContext);
	return (
		<Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 17, color: colors.white }}>
			{/* {title? title : `Welcome back, ${profileDetails.name}`} */}
		</Text>
	)
}

export default HeaderTitle;