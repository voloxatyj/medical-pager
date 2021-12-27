import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { api_key_stream_chat } from './config';
import { ChannelContainer, ChannelListContainer, Auth } from './components';

import 'stream-chat-react/dist/css/index.css';
import './App.css';

const cookies = new Cookies();
const authToken = cookies.get('token');

const client = StreamChat.getInstance(api_key_stream_chat);

if(authToken) {
	client.connectUser({
		 id : cookies.get('userId'),
		 name : cookies.get('username'),
		 fullName : cookies.get('fullName'),
		 phoneNumber : cookies.get('phoneNumber'),
		 image : cookies.get('avatarURL'),
		 hashedPassword : cookies.get('hashedPassword'),
	}, authToken);
}

const App = () => {
	const [createType, setCreateType] = useState('');
	const [isCreating, setIsCreating] = useState(false);
	const [isEditing, setIsEditing] = useState(false);

	if(!authToken) return <Auth /> 

	return (
		<div className="app__wrapper">
			<Chat client={client} theme="team light">
				<ChannelListContainer 
					isCreating={isCreating}
					setIsCreating={setIsCreating}
					setCreateType={setCreateType}
					setIsEditing={setIsEditing}
				/>
				<ChannelContainer 
					isCreating={isCreating}
					setIsCreating={setIsCreating}
					createType={createType}
					isEditing={isEditing}
					setIsEditing={setIsEditing}
				/>
			</Chat>
		</div>
	)
}

export default App;