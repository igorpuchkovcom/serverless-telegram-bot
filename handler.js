'use strict';
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env['TOKEN'], {polling: true});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports.telegram = async (_event, _context) => {
    bot.onText(/\/helloworld(?:@+.*)*$/, (msg) => {
        bot.sendMessage(msg.chat.id, JSON.stringify(msg, null, 2));
    });
    await sleep(60000);
}

module.exports.apirest = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Go Serverless v2.0! Your function executed successfully!",
            input: event
        }, null, 2),
    };
};