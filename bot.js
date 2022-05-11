const {Telegraf} = require('telegraf');
const bot = new Telegraf('5376215991:AAFoo9x9frLS1_zrqJJaqKR_6eFX_1SgOHc')

bot.start( ctx => ctx.reply('Selamat datang ges, nama w ubay'))

bot.help( ctx => ctx.reply('programmer nya lagi males, ga ada page help. coba bales pake stiker'))

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
