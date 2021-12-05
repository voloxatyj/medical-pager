require('dotenv').config({path: process.cwd() + '/.env.local'});

const config = {};


config.api_secret = process.env.STREAM_API_SECRET;
config.api_key = process.env.STREAM_API_KEY;
config.app_id = process.env.STREAM_APP_ID;
config.app_dir = process.cwd();

module.exports = config;