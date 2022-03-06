# CHANNEL

## Inspiration
Whenever I was on a trip or on a flight with my friends and all of us want to watch/listen to a movie/music simultaneously, we could not, either because of the network connectivity or because of lack of "premium" subscriptions on all devices. Hence, I came up with this idea of creating a local streaming room which can share media LIVE!! Crazy right!!

## What it does
Suppose one person has a Media file on his phone, he can create a live Channel server which will open a socket connection for all clients to connect and listen. The server will wait for all clients to join and then start writing on the Created Channel. Simultaneously all the clients will be able to play the media on their device. What does this eliminate?
Suppose you are on a flight and you do not want to play the music on speaker, you can create a Channel and live stream among the local devices so that each user can consume the media on their own device which can be connected to a headphone/earphone.

## How we built it
We built a React native application which is a cross platform mobile application which has two flows, client and server, the server will "Create a Channel", clients will "Join a channel" and consume media in real time.

## Challenges we ran into
Reading media from the device and encoding it so that it does not get corrupted while getting transferred on the local network. Since its a live stream we cannot read the entire file at once, we are supposed to read it in chunks and write it to the network because of this we will have to gather the media on the client as chunks and play.

## Accomplishments that we're proud of
Achieving an END-END user application which solves a problem and is fun to use. The UX is pretty simple to use.

## What we learned
Learnt about cross platform application development, media sharing on sockets, UX design, Creating an Entertaining application

## What's next for Channel - Room based Local Streaming Application
Building a secure "Channel" between server and client. Do not allow any program to snoop in on the network.
Support different kind of media files.

