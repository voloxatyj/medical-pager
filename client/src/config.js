const config = {};

config.api_key_stream_chat = process.env.REACT_APP_API_KEY_STREAM_CHAT;

config.app = process.env.REACT_APP_MODE || 'dev';

config.server_host = process.env.REACT_APP_SERVER_HOST || config.app === 'dev' ? 'http://localhost' : 'https://morning-mountain-13643.herokuapp.com';
config.server_port = process.env.REACT_APP_SERVER_PORT || config.app === 'dev' ? 5000 : '';

module.exports = config;