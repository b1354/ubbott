require('dotenv').config()

const {Telegraf} = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start( ctx => ctx.reply('Selamat datang ges, nama w ubay'))

bot.help( ctx => ctx.reply('sorry bro, ga ada page helpnya. coba bales pake stiker'))

bot.on('sticker', (ctx) => {
  ctx.reply('hi maniezz')
  ctx.reply('😘')
})

bot.hears('aku indah', (ctx) => {
  let isiPesan = ctx.message.text
  let pengirim = ctx.message.from.username

  console.log(`pesan oleh ${pengirim}, isinya: ${isiPesan}`)

  if (pengirim == 'indahsknhh') {
    ctx.reply('hi indah, dapet salam dari ubay')
  } else {
    ctx.reply(`kamu bohong, kamu tidak indah. username kamu @${pengirim}`)
  }
})

bot.launch()
console.log('bot running')
