/**

 * Jangan Di Hapus!!

 * 

 * Buatan @FokusDotId (Fokus ID)

 * Github: https://github.com/fokusdotid

 * 

 * Ingin bikin fitur tapi tidak bisa coding?

 * hubungi: https://wa.me/6281320170984

 * 

 */

const { proto } = require('@adiwajshing/baileys');

let handler = async (m, { conn, text, command, usedPrefix }) => {

	let M = proto.WebMessageInfo;

	if (!m.quoted) throw `balas pesan dengan perintah *${usedPrefix + command}*`;

	if (!text) throw `penggunaan: ${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} tes`;

	let store = db.data.store

	if (text in store) throw `'${text}' telah terdaftar di database!`

	store[text] = M.fromObject(await m.getQuotedObj()).toJSON()

	m.reply(`berhasil menambahkan ${text} ke database.\n\nakses dengan mengetik namanya`.trim())

}

handler.help = ['store'].map(v => 'add' + v + ' <teks>')

handler.tags = ['store']

handler.command = /^addstore$/i

module.exports = handler