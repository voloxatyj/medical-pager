const express = require('express');
const cors = require('cors');
const { twilio_account_sid, twilio_auth_token, messaging_service_sid, port } = require('./config/config');

const authRoutes = require('./routes/auth.js');
console.log( twilio_account_sid, twilio_auth_token, messaging_service_sid, port);

const app = express(); 

const twilioClient = require('twilio')(twilio_account_sid, twilio_auth_token);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.post('/', (req, res) => {
	const { message, user: sender, type, members } = req.body;

	if (type === 'message.new') {
		members
			.filter((member) => member.user_id !== sender.id) 
			.forEach(({ user }) => {
			if (!user.online) {
				twilioClient.messages.create({
					body: `You have a new message from ${message.user.fullName} - ${message.text}`,
					messagingServiceSid: messaging_service_sid,
					to: user.phoneNumber
				})
				.then(() => console.log('Message sent!'))
				.catch((err) => console.log(err));
			}
		});
		return res.status(200).send('Message sent!');
	}

	return res.status(200).send('Not a new message request!');
});

app.use('/auth', authRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));