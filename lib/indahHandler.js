const {Composer} = require('telegraf')

module.exports = Composer.hears('aku indah', async (ctx) => {
  let isiPesan = ctx.message.text
  let pengirim = ctx.message.from.username

  console.log(`pesan oleh ${pengirim}, isinya: ${isiPesan}`)

  if (pengirim == 'indahsknhh') {
    ctx.reply('hi indah, dapet salam dari ubay')
  } else {
    ctx.reply(`kamu bohong, kamu tidak indah. username kamu @${pengirim}`)
  }
})
