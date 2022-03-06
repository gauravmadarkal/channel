import RNFetchBlob from 'react-native-fetch-blob';
import TCPSocket from 'react-native-tcp-socket';
import DocumentPicker from 'react-native-document-picker';
import { NativeModules } from 'react-native';

export const startServer = async (serverName) => {
	return new Promise((resolve, reject) => {
		const socket = TCPSocket.createServer();
		socket.listen({ port: 8088, host: "0.0.0.0" });
		socket.on('connection', (sock) => {
			// sock.address().
			sock.write(`${serverName};`);
			resolve(sock);
		});
		socket.on('error', (err) => {
			reject(err);
		});
	});
};

export const getServers = (host) => {
	return new Promise((resolve, reject) => {
		const client = TCPSocket.createConnection({
			port: 8088,
			host
		});
		client.on('data', (data) => {
			console.log('found servers', data);
			const socketData = JSON.parse(data);
			const channels = socketData.split(';');
			resolve({
				channels,
				client
			});
		});
	})
}

export const pickFile = async () => {
	const res = await DocumentPicker.pickSingle({ type: DocumentPicker.types.audio });
	return res.uri;
}

export const startTransmission = async (socket, fileuri) => {
	console.log(socket);
	await RNFetchBlob
	.fs
	.readStream(fileuri, 'base64', 2048)
	.then((ifstream) => {
		ifstream.open();
		ifstream.onData((chunk) => {
			if (socket) {
				socket.write(chunk);
			}
			const { AudioReceiver } = NativeModules;
			AudioReceiver.playAudio(chunk);
		});
		ifstream.onEnd(() => {
			console.log('----------------data-end----------------');
		});
	});
}

export const startListening = async (client) => {
	client.on('data', (data) => {
		console.log('found servers', data);
		const { AudioReceiver } = NativeModules;
		AudioReceiver.playAudio(data);
	});
}