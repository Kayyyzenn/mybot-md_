const fetch = require('node-fetch')

let fs = require("fs")

const { MessageType } = require('@adiwajshing/baileys')

const { sticker } = require('../lib/sticker')



let handler = async (m, { conn, text, args }) => {

		let anu = await `https://telegra.ph/file/beb157c731af662169ef0.jpg`

			let stiker = await sticker(false, anu, global.packname, global.author)

			conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)

		}

}

		

handler.help = ['emojimix']

handler.tags = ['sticker']

handler.command = /^(wow)$/i

handler.limit = true 

module.exports = handler

