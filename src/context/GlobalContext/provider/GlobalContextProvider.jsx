import React, { 
	useState,
	useEffect
} from 'react';
import { getServers, pickFile, startServer, startTransmission } from '../../../js/server';
import GlobalContext from '../GlobalContext';
import {
	NativeModules
} from 'react-native';


const GlobalContextProvider = ({
	children
}) => {
	const [appVersion, setAppVersion] = useState('1.0.0');
	const [profileDetails, setProfileDetails] = useState({
		name: 'Jane',
	});
	const [currentScreen, setCurrentScreen] = useState('splash');
	const [viewers, setViewers] = useState([{
		'name': 'Gaurav'
	}]);
	const [channels, setChannels] = useState([
		{
			'id': "Gaurav's Server"
		}
	]);
	const [serverIp, setServerIp] = useState(null);
	const [pairedChannel, setPairedChannel] = useState(null);
	const [socketServer, setSocketServer] = useState(null);
	const [socketClient, setSocketClient] = useState(null);
	const [chosenFile, setChosenFile] = useState(null);

	const getAvailableServers = async () => {
		const response = getServers(serverIp);
		if (response.channels) {
			setChannels(response.channels);
			setSocketClient(response.client);
		}
	}

	useEffect(() => {
		if (serverIp !== null && serverIp && serverIp !== '') {
			console.log('getting server ip', serverIp);
			getAvailableServers();
		}
	}, [serverIp]);

	const createServer = async () => {
		const server = await startServer(profileDetails.name);
		setSocketServer(server);
	}

	const chooseChannel = (channelId) => {
		console.log(channelId);
		setPairedChannel(channelId);
	}

	const getServerAddress = () => {
		console.log('getting address');
		const { AudioReceiver } = NativeModules;
		AudioReceiver.getHostAddress((address) => {
			console.log(address);
			if (address !== null) {
				setServerIp(address);
			}
		});
	}

	const beginChannelling = (file) => {
		console.log(file);
		startTransmission(socketServer, file);
	}

	const pickAudioFile = async () => {
		const uri = await pickFile();
		console.log(uri);
		setChosenFile(uri);
		startTransmission(socketServer, uri);
		return uri;
	}

	return (
		<GlobalContext.Provider
			value={{
				appVersion,
				profileDetails,
				screenState: [currentScreen, setCurrentScreen],
				viewers,
				channels,
				chooseChannel,
				createServer,
				getServerAddress,
				beginChannelling,
				chosenFile,
				pickAudioFile
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
};

export default GlobalContextProvider;