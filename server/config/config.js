require('dotenv').config({path: process.cwd() + '/.env.local'});

const config = {};


config.api_secret = process.env.STREAM_API_SECRET;
config.api_key = process.env.STREAM_API_KEY;
config.app_id = process.env.STREAM_APP_ID;
config.app_dir = process.cwd();
config.twilio_account_sid = process.env.TWILIO_ACCOUNT_SID;
config.twilio_auth_token = process.env.TWILIO_AUTH_TOKEN;
config.messaging_service_sid = process.env.MESSAGING_SERVICE_SID;

module.exports = config;