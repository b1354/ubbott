const helpContent = `
bot buat gabut aja

/help - menampilkan list command
/sayhi - menyapa
/whoami - nampilin username kamu
/server - memberikan informasi server yang menjalankan bot
/meow - ngehibur kamu pake foto kucing random yang lucu nan menggemaskan
/quran - menampilkan ayat al-quran, ketik "/quran help" buat info lengkapnya

Note:
ada bug atau error?
chat ke @Codename_Utsukushii
`

const botHelp = async (ctx)=>{
  ctx.reply(helpContent)
}

module.exports = botHelp
