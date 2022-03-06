import ChannellingScreen from "../screens/Channel";
import Home from "../screens/Home";
import ClientInstructions from "../screens/Instructions/clientInstructions";
import ServerInstructions from "../screens/Instructions/serverInstructions";
import Profile from "../screens/Profile";
import SearchingScreen from "../screens/Searching";
import WaitingScreen from "../screens/Waiting";
import { Screens } from "./constants";

export const routes = [
	{
		name: Screens.HomeScreen,
		component: Home
	},
	{
		name: Screens.ProfileScreen,
		component: Profile
	},
	{
		name: Screens.ServerInstructionsScreen,
		component: ServerInstructions
	},
	{
		name: Screens.ClientInstructionsScreen,
		component: ClientInstructions
	},
	{
		name: Screens.SearchingScreen,
		component: SearchingScreen
	},
	{
		name: Screens.WaitingScreen,
		component: WaitingScreen
	},
	{
		name: Screens.ChannelScreen,
		component: ChannellingScreen
	},
	{
		name: Screens.ViewerScreen,
		component: Profile
	}
];