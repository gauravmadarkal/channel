/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { 
	useEffect,
	useState
} from 'react';
 import {
	 Image,
	 SafeAreaView,
	 StatusBar,
	 TouchableOpacity,
 } from 'react-native';
 import {
	 createNativeStackNavigator
 } from '@react-navigation/native-stack';
 import { NavigationContainer } from '@react-navigation/native';
 import GlobalContextProvider from './src/context/GlobalContext/provider/GlobalContextProvider';
 import Home from './src/screens/Home';
//  import Profile from './src/screens/Profile';
 import AccountIcon from './src/assets/icons/user.png';
 import HeaderTitle from './src/components/HeaderTitle';
import { startTransmission } from './src/js/server';
import GlobalContext from './src/context/GlobalContext/GlobalContext';
import { Screens } from './src/assets/constants';
import Profile from './src/screens/Profile';
import Splashscreen from './src/screens/Splashscreen';
import style from './style';
import { routes } from './src/assets/routes';
 
const Stack = createNativeStackNavigator();
const App = () => {
	// const { screenState } = useContext(GlobalContext);
	// const [currentScreen, setCurrentScreen] = screenState;
	const [currentScreen, setCurrentScreen] = useState(Screens.SplashScreen);

	useEffect(() => {
		setTimeout(() => {
			setCurrentScreen(Screens.HomeScreen);
		}, 2000);
		// console.log("app started");
		// startTransmission(undefined);
	}, []);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar
				animated
				translucent
				backgroundColor='#000'
				barStyle='light-content'
			/>
			<GlobalContextProvider>
				<NavigationContainer>
					{currentScreen === Screens.SplashScreen ?
						<Splashscreen />
						:
						<Stack.Navigator initialRouteName={currentScreen}>
							{routes.map((route) => (
								<Stack.Screen
									name={route.name}
									children={route.component}
									options={({ navigation }) => ({
										headerTitle: () => <HeaderTitle />,
										headerLeft: () => (
											<TouchableOpacity
												onPress={() => navigation.navigate(Screens.ProfileScreen)}
												style={style.profileIcon}
											>
												<Image source={AccountIcon} style={{ width: 20, height: 20 }} />
											</TouchableOpacity>
										),
										headerStyle: {
											backgroundColor: 'black',
										},
										headerBackVisible: false
									})}
								/>
							))}
						</Stack.Navigator>
					}
				</NavigationContainer>
			</GlobalContextProvider>
		</SafeAreaView>
	);
};

export default App;
 