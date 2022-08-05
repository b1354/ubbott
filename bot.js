require('dotenv').config()

const http = require('http')
const PORT = process.env.port || 3000

const {Telegraf} = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)

const command = require('./lib/command')
const botHelp = require('./lib/botHelp')
const indahHandler = require('./lib/indahHandler');
const serverInfo = require('./lib/serverInfo')
const cat = require('./lib/cat')
const quranAPI = require('./lib/quran')

bot.start( ctx => ctx.reply('welcome to ubott_'))
bot.help(botHelp)

bot.hears('oy', (ctx) => {
  ctx.reply('oyy, apa bang?')
})

bot.use(indahHandler)
bot.use(command.sayhi)
bot.use(command.whoami)


bot.command('quran', quranAPI.quran)
bot.command('server', serverInfo)
bot.command('replyme', command.replyMe)
bot.command('miaw', cat)

bot.on('sticker', (ctx) => {
  ctx.reply('hi maniezz')
  ctx.reply('😘')
})

bot.command('waifu', (ctx) => {
  let waifuMessage = `chose your waifu`
  bot.telegram.sendMessage(ctx.chat.id, waifuMessage, {
    reply_markup: {
      inline_keyboard: [
        [{
          text: "kato",
          callback_data: "kato"
        },
        {
          text: "utaha",
          callback_data: "utaha"
        }]
      ]
    }
  })

  bot.action('kato', (ctx) => {
    ctx.deleteMessage()
    ctx.replyWithMediaGroup([{
      media: {source: "./res/kato.jpeg"},
      caption: "waifu kamu kato, ini pfp nya",
      type: "photo"
    }])
  })

  bot.action('utaha', (ctx) => {
    ctx.deleteMessage()
    ctx.replyWithMediaGroup([{
      media: {source: "./res/utaha.jpeg"},
      caption: "waifu kamu Utaha senpai, ini pfp nya",
      type: "photo"
    }])
  })
})

bot.action('indah', (ctx) => {
  ctx.deleteMessage()
  let uname = ctx.from.username.toLowerCase()
  if (uname != 'codename_utsukushii'){
    ctx.reply('maaf gabisa, indah mah cuman punya bayu 😅')
  } else ctx.reply("waifu kamu @indahsknhh (gaada foto karena yang punyanya ga dikasi pap")
})

bot.launch()
console.log('bot running')

http.createServer((request, response) => {
  response.end('telebot: ubbot')
}).listen(PORT)
