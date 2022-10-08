let handler  = async (m, { conn, usedPrefix, command, args, text, }) => {

conn.sendButton(m.chat, `jibtik`, wm, 'ℹ️ Menu', '.menu', m)



handler.command = /^(1hari)$/i

module.exports = handler