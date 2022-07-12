require('dotenv').config()

const {Telegraf} = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)

const command = require('./lib/command')
const botHelp = require('./lib/botHelp')
const serverInfo = require('./lib/serverInfo')
const cat = require('./lib/cat')
const quranAPI = require('./lib/quran')

bot.start( ctx => ctx.reply('welcome to ubott_'))
bot.help(botHelp)

bot.hears('oy', (ctx) => {
  ctx.reply('oyy, apa bang?')
})

bot.use(command.sayhi)
bot.use(command.whoami)


bot.command('quran', quranAPI.quran)
bot.command('server', serverInfo)
bot.command('replyme', command.replyMe)
bot.command('miaw', cat)

bot.launch()
console.log('bot running')
