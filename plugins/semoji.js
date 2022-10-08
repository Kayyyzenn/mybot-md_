const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = "BEGIN:VCARD\nVERSION:3.0\nN:1;;Vinz;;\nFN:Vinz\nitem1.TEL;waid=6285711537991:+62 857-1153-7991\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:NdaaBotz-MD\nEND:VCARD"
                conn.sendMessage(m.chat, { contacts: { contacts: [{ vcard }] } }, { quoted: m })
}

handler.command = /^(vinzowns)$/i

module.exports = handler