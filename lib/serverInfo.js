const os = require('os')
let serverHelp = `
/server os - untuk melihat OS yang digunakan server
/server uptime - untuk melihat berapa lama server berjalan
`

module.exports = async (ctx) => {
  let param = ctx.message.text.split(" ")

  switch (param[1]) {
    case 'help':
    case undefined:
      ctx.reply(serverHelp)
      break
    case 'os':
      ctx.reply(`server berjalan di sistem operasi: ${os.platform()}`)
      break
    case 'uptime':
      let uptime = Math.floor(os.uptime/60)
      ctx.reply(`server online selama: ${uptime} menit`)
      break
    default:
      console.log(param[1])
      ctx.reply(`perintah tidak tersedia \ncoba ketik /server help`)
  }
}
