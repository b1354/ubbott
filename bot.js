require('dotenv').config()

const {Telegraf} = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN)

const command = require('./lib/command')
const botHelp = require('./lib/botHelp')
const indahHandler = require('./lib/indahHandler');
const serverInfo = require('./lib/serverInfo')

bot.start( ctx => ctx.reply('Selamat datang ges, welcome to ubott_'))

bot.use(botHelp)
bot.use(indahHandler)
bot.use(command.sayhi)
bot.use(command.whoami)
bot.use(command.waifu)

bot.command('server', serverInfo)

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

bot.launch()
console.log('bot running')
