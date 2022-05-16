const {Composer} = require('telegraf')

const sayhi = Composer.command('sayhi', async (ctx) => {
  ctx.reply("hi")
})

const whoami = Composer.command('whoami', async (ctx) => {
  let username = ctx.message.from.username

  ctx.reply(`username kamu adalah: \n @${username}`)
})

module.exports =  {
  sayhi: sayhi,
  whoami: whoami

}
