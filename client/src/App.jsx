import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelContainer, ChannelListContainer, Auth } from './components';
import './App.css';

const apiKey = 'rkamxg3b4dvq';

const client = StreamChat.getInstance(apiKey);

const token = false;

const App = () => {
	if(!token) return <Auth /> 

	return (
		<div className="app__wrapper">
			<Chat client={client} theme="team light">
				<ChannelListContainer />
				<ChannelContainer />
			</Chat>
		</div>
	)
}

export default App;