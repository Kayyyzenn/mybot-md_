let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu = `╭───❑ 「 BALANCE 」 ❑────
│ ✇ Name: ${user.name}
│ ✇ Limit: ${user.limit}
│ ✇ Money: ${user.money}
│ ✇ Exp: ${user.exp}
│ ✇ Level: ${user.level}
│ ✇ Role: ${user.role}
│ ✇ Warn: ${user.warn}
│ ✇ Job: ${user.job}
│ ✇ BGL: ${user.bgl}
│ ✇ DL: ${user.dl}
│ ✇ WL: ${user.wl}
│ ✇ GEMS: ${user.gems}
╰❑`
    conn.sendButton(m.chat, anu, wm, 'back to menu', '.menu', m)
}
handler.help = ['myy', 'my @user']
handler.tags = ['xp']
handler.command = /^(myy)$/i

module.exports = handler
