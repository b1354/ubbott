// generate random cat image from https://placekitten.com

function generateNum(min = 100, max = 550) {
  let difference = max - min
  let generatedNum = Math.floor(Math.random() * difference + min)
  return generatedNum
}

module.exports = async (ctx) => {
  ctx.replyWithMediaGroup([
    {
      media: `https://placekitten.com/${generateNum()}/${generateNum()}`,
      caption: `nih kucing imut buat kamu @${ctx.message.from.username}`,
      type: 'photo'
    }
  ])
}
