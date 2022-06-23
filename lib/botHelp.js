const helpContent = `
bot buat gabut aja

/help - menampilkan list command
/sayhi - menyapa, kasian gaada yang nyapa
/whoami - nampilin username kamu
/waifu - memilih waifu, terus ngasih pfp
/server - memberikan informasi server yang menjalankan bot
/miaw - ngehibur kamu pake foto kucing random yang lucu nan menggemaskan
/quran - ketik "/quran help" buat info lengkapnya

Note:
Kalau ada bug atau error apa
chat ke @Codename_Utsukushii
`

const botHelp = async (ctx)=>{
  ctx.reply(helpContent)
}

module.exports = botHelp
