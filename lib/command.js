const {Composer} = require('telegraf')

const sayhi = Composer.command('sayhi', async (ctx) => {
  ctx.reply("hi")
})

const whoami = Composer.command('whoami', async (ctx) => {
  let username = ctx.message.from.username

  ctx.reply(`username kamu adalah: \n @${username}`)
})

const replyMe = async (ctx) => {
  ctx.replyWithMarkdown(
    '*@'+ ctx.message.from.username +'* iyaa, ini di reply cuy',
    {'reply_to_message_id': ctx.message.message_id}
  )
}

module.exports =  {
  sayhi: sayhi,
  whoami: whoami,
  replyMe: replyMe
}
