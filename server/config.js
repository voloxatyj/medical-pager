const config = {};

config.api_key = process.env.STREAM_API_KEY;
config.api_secret = process.env.STREAM_API_SECRET;
config.app_id = process.env.STREAM_APP_ID;

module.exports = config;