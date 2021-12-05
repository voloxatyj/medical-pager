const config = {};

config.api_key_stream_chat = process.env.REACT_APP_API_KEY_STREAM_CHAT;

config.server_host = process.env.REACT_APP_SERVER_HOST || 'http://localhost';
config.server_port = process.env.REACT_APP_SERVER_PORT || 5000;

module.exports = config;