require('dotenv').config()
const TelegramApi = require('node-telegram-bot-api')
const token = process.env.TOKEN
const bot = new TelegramApi(token, {polling: true})


bot.on('message', async msg => {
    const text = msg.text
    const chatId = msg.chat.id
    await bot.sendMessage(chatId, text)
})