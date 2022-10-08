import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

	conn.sendFile(m.chat, './media/virgam.jpeg')

}

handler.help = ['animal'].map((v) => v + ' <opsi>')

handler.tags = ['internet']

handler.command = /^(virgam)$/i

module.exports = handler