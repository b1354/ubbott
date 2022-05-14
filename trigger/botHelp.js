const {Composer} = require('telegraf')

const helpContent = `
/help - menampilkan list command
/sayhi - menyapa
/whoami - menampilkan username

reply menggunakan sticker dan lihat apa yang terjadi
`

const botHelp = Composer.command('help', async (ctx)=>{
  ctx.reply(helpContent)
})

module.exports = botHelp
