const {Composer} = require('telegraf')

const helpContent = `
/help - menampilkan list command
/sayhi - menyapa, kasian gaada yang nyapa
/whoami - nampilin username kamu
/waifu - memilih waifu, terus ngasih pfp

reply menggunakan sticker dan lihat apa yang terjadi
`

const botHelp = Composer.command('help', async (ctx)=>{
  ctx.reply(helpContent)
})

module.exports = botHelp
