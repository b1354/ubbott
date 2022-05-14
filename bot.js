require('dotenv').config()

const {Telegraf} = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN)

const command = require('./trigger/command')
const botHelp = require('./trigger/botHelp')
const indahHandler = require('./trigger/indahHandler');

bot.start( ctx => ctx.reply('Selamat datang ges, nama w ubay'))

bot.use(botHelp)
bot.use(command.sayhi)
bot.use(command.whoami)
bot.use(indahHandler)

bot.on('sticker', (ctx) => {
  ctx.reply('hi maniezz')
  ctx.reply('😘')
})

bot.launch()
console.log('bot running')
