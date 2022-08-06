require('dotenv').config()

const express = require('express')
const port = process.env.PORT || 3000
const expressApp = express()

const {Telegraf} = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)

const command = require('./lib/command')
const botHelp = require('./lib/botHelp')
const serverInfo = require('./lib/serverInfo')
const cat = require('./lib/cat')
const quranAPI = require('./lib/quran')

expressApp.get('/', (req, res) => {
  res.send('bot running!!')
})
expressApp.listen(port, () => {
  console.log(`Listening on port ${port}`)
})


bot.start( ctx => ctx.reply('welcome to ubott_'))
bot.help(botHelp)

bot.hears('oy', (ctx) => {
  ctx.reply('oyy, apa bang?')
})

bot.command('quran', quranAPI.quran)
bot.command('server', serverInfo)
bot.command('replyme', command.replyMe)
bot.command('sayhi', command.sayhi)
bot.command('whoami', command.whoami)
bot.command('meow', cat)

bot.launch()
console.log('bot running')


process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
