// get ayat from https://alquran.cloud
const axios = require('axios')
const fs = require('fs')

const listSurah = JSON.parse(fs.readFileSync("surahList.json"))

const bismillah = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
const apiUrl = "http://api.alquran.cloud/v1/ayah/"
const helpContent = `
bot ini digunakan untuk mencari ayat al-quran
beserta terjemahannya dari API https://alquran.cloud

perintah:
/quran help => menampilkan laman bantuan ini.

/quran list => menampilkan list surah al-quran beserta penulisannya untuk digunakan di bot ini.

/quran surah "surat:ayat" => menampilkan ayat dari surat yang sudah di tentukan,
(contoh: /quran surah al-baqarah:255).

Note: pastikan nama surah nya sesuai dengan yang ada di "/quran list".
jika ada bug atau error chat aja ke @Codename_Utsukushii

selamat mencoba.
`

let quran = async (ctx) => {
  let param = ctx.message.text.split(" ")

  switch (param[1]) {
    case undefined:
    case "help":
      ctx.reply(helpContent)
      break
    case "list":
      let listOfSurah = getList()
      ctx.reply(listOfSurah)
      break
    case "surah":
      let requestedAyat = await getAyat(param[2])
        await ctx.reply(requestedAyat)
      break
    default:
      await ctx.reply("Kesalahan dalam memasukan perintah, ketik '/quran help'")
  }
}

let getList = () => {
  let output = ``

  for (let i = 0; i < listSurah.length; i++){
    output += `${i+1}. ${listSurah[i]} \n`
  }

  return output
}

let getAyat = async (surah) => {
  let parameter =  surah.split(":")
  let surahIndex =  listSurah.indexOf(parameter[0]. toLowerCase()) + 1
  let ayatNumber = parameter[1]

  if (surahIndex == false || ayatNumber == undefined) {
    return `kesalahan dalam memasukan perintah\ngunakan perintah '/quran list' atau '/quran help'. pastikan nama suratnya sesuai dengan yang di /quran list`
  }

  // getAyat
  const ayat = await axios.get(
    `${apiUrl}${surahIndex}:${ayatNumber}`
  ).catch(err => console.log(err))

  // getTranslation
  const translation = await axios.get(
    `${apiUrl}${surahIndex}:${ayatNumber}/id.indonesian `
  ).catch(err => console.log(err))

  if (!ayat) {
    return `terjadi kesalaham saat memproses data`
  }

  let output = {
    surahName: ayat.data.data.surah.englishName,
    content: ayat.data.data.text,
    ayatNumber: ayat.data.data.numberInSurah,
    translation: translation.data.data.text
  }

  // remove bismillah
  if (surahIndex!=1 && ayatNumber == 1) {
    output.content = output.content.replace(bismillah, "")
  }

  return (`
  ${output.content}

  artinya:
  "${output.translation}" (${output.surahName}:${output.ayatNumber})
  `)
}

module.exports = {
  quran: quran
}
