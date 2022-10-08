let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `
┏─────────────────⬣
┆ 𝑯𝒂𝒊, ${ucapan()}  %name!👋
┗┬──────────────┈ ⳹
┏┆⬡ *Status:* %prems
┆┆⬡ *Limit:* %limit
┆┆⬡ *Money:* %money
┆┆⬡ *Role:* %role
┆┆⬡ *Level:* %level [ %xp4levelup Xp For Levelup]
┆┆⬡ *Xp:* %exp / %maxexp
┆┆⬡ *Total Xp:* %totalexp
┗┬──────────────┈ ⳹
┏┤   *𝐊𝐚𝐥𝐞𝐧𝐝𝐞𝐫*
┆┗──────────────┈ ⳹
┆┆⬡ *Days:* %week %weton
┆┆⬡ *Date:* %date
┆┆⬡ *Islami Date:* %dateIslamic
┆┆⬡ *Time:* %time
┗┬──────────────┈ ⳹
┏┤ *𝐁𝐨𝐭 𝐈𝐧𝐟𝐨*
┆┗──────────────┈ ⳹
┆┆⬡ *Bot Name:* %me
┆┆⬡ *Mode:* Public
┆┆⬡ *Platform:* Panel
┆┆⬡ *Type:* Node.Js
┆┆⬡ *Baileys:* Multi Device
┆┆⬡ *Prefix:* [ Multi ]
┆┆⬡ *Runtime:* %muptime
┆┆⬡ *Database:* %rtotalreg dari %totalreg
┗┬──────────────┈ ⳹
┏┤ *Sekedar Info*
┆┗──────────────┈ ⳹
┆┆⬡ *Owner Name* = Ndaa
┆┆⬡ *Fitur Bug?︎* = Lapor
┗─────────────────⬣

%readmore
`.trim(),
  header: '┌─〔 %category 〕',
  body: '├ %cmd %islimit %isPremium',
  footer: '└────\n',
  after: `
*NdaaBotz-MD@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {

  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'gt', 'new', 'sound', 'nsfw', 'xp', 'stiker', 'asupan', 'kerangajaib', 'quotes', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'UTAMA',
    'game': 'Game',
    'gt': 'Growtopia',
    'new': 'New Fitur',
    'sound': 'Sound Menu',
    'nsfw': 'Nsfw 18+',
    'rpg': 'RPG',
    'xp': 'Exp & Limit',
    'sticker': 'Stiker',
    'asupan': 'Asupan Menu',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'group': 'Grup',
    'premium': 'Premium',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Al Qur\'an',
    'audio': 'Pengubah Suara',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    '': 'Tanpa Kategori',
  }
  if (teks == 'game') tags = {
    'game': 'Game',
    'rpg': 'RPG'
  }
  if (teks == 'gt') tags ={
    'gt': 'Growtopia',
  }
  if (teks == 'new') tags = {
    'new': 'New Fitur'
  }
  if (teks == 'sound') tags = {
    'sound': 'Sound Menu'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw 18+'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'asupan') tags = {
    'asupan': 'Asupan Menu'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al Qur\'an'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    global.jam = time
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      let judul = `
┏─────────────────⬣
┆ 𝑯𝒂𝒊, ${ucapan()}  ${name}!👋
┗┬──────────────┈ ⳹
┏┆⬡ *Status:* Gatau
┆┆⬡ *Limit:* ${limit}
┆┆⬡ *Money:* ${money}
┆┆⬡ *Role:* ${role}
┆┆⬡ *Level:* ${level}
┆┆⬡ *Xp:* ${exp}
┆┆⬡ *Name:* ${name}
┗┬──────────────┈ ⳹
┏┤   *𝐊𝐚𝐥𝐞𝐧𝐝𝐞𝐫*
┆┗──────────────┈ ⳹
┆┆⬡ *Days:* ${week} ${weton}
┆┆⬡ *Date:* ${date}
┆┆⬡ *Islami Date:* ${dateIslamic}
┆┆⬡ *Time:* ${date}
┗┬──────────────┈ ⳹
┏┤ *𝐁𝐨𝐭 𝐈𝐧𝐟𝐨*
┆┗──────────────┈ ⳹
┆┆⬡ *Bot Name:* NdaaBotz-MD
┆┆⬡ *Mode:* Public
┆┆⬡ *Platform:* Panel
┆┆⬡ *Type:* Node.Js
┆┆⬡ *Baileys:* Multi Device
┆┆⬡ *Prefix:* [ Multi ]
┆┆⬡ *Runtime:* ${muptime}
┆┆⬡ *Database:* ${rtotalreg} dari ${totalreg}
┗┬──────────────┈ ⳹
┏┤ *𝐈𝐧𝐟𝐨 𝐂𝐦𝐝*
┆┗──────────────┈ ⳹
┆┆⬡ *🅟︎* = Premium
┆┆⬡ *🅛︎* = Limit
┗─────────────────⬣
`.trim()
      const sections = [
      {
        title: 'List Menu ' + namabot,
        rows: [
          { title: 'Sewa Bot', rowId: `${_p}harga`, description: `Sewa bot agar join ke group mu `},
          { title: 'Rules For Mods', rowId: `${_p}rulesmods`, description: `Rules For Mods `},
          { title: 'Rules', rowId: `${_p}rules`, description: `Rules For All `},
          { title: 'Semua Perintah', rowId: `${_p}? all`, description: `Menampilkan Semua Fitur `},
          { title: 'Growtopia Menu', rowId: `${_p}? gt`, description: `beta testing `},
          { title: 'Game', rowId: `${_p}? game`, description: `Menampilkan Menu Game `},
          { title: 'Sound Menu', rowId: `${_p}? sound`, description: `Menampilkan Menu Sound ( beta ) `},
          { title: 'Fitur Baru ( Beta )', rowId: `${_p}? new`, description: `Menampilkan Menu New Fitur `},
          { title: 'Nsfw 18+', rowId: `${_p}? nsfw`, description: `Menampilkan Menu NsFw `},
          { title: 'Store Menu', rowId: `${_p}liststore`, description: `Menampilkan Menu Store `},
          { title: 'XP', rowId: `${_p}? xp`, description: `Menampilkan Menu Exp `},
          { title: 'Stiker', rowId: `${_p}? stiker`, description: `Menampilkan Menu Stiker `},
          { title: 'Asupan', rowId: `${_p}? asupan`, description: `Menampilkan Menu Asupan `},
          { title: 'Kerang Ajaib', rowId: `${_p}? kerangajaib`, description: `Menampilkan Menu Kerangajaib `},
          { title: 'Quotes', rowId: `${_p}? quotes`, description: `Menampilkan Menu Quotes `},
          { title: 'Grup', rowId: `${_p}? grup`, description: `Menampilkan Menu Group `},
          { title: 'Premium', rowId: `${_p}? premium`, description: `Menampilkan Menu Premium `},
          { title: 'Internet', rowId: `${_p}? internet`, description: `Menampilkan Menu Internet `},
          { title: 'Anonymous', rowId: `${_p}? anonymous`, description: `Menampilkan Menu Anonymous Chat `},
          { title: 'Nulis & Logo', rowId: `${_p}? nulis`, description: `Menampilkan Menu Nulis `},
          { title: 'Downloader', rowId: `${_p}? downloader`, description: `Menampilkan Menu Downloader `},
          { title: 'Tools', rowId: `${_p}? tools`, description: `Menampilkan Menu Tools `},
          { title: 'Fun', rowId: `${_p}? fun`, description: `Menampilkan Menu fun `},
          { title: 'Database', rowId: `${_p}? database`, description: `Menampilkan Menu Database `},
          { title: 'Vote & Absen', rowId: `${_p}? vote`, description: `Menampilkan Menu Vote `},
          { title: "Al-Qur\'an", rowId: `${_p}? quran`, description: `Menampilkan Menu quran `},
          { title: 'Pengubah Suara', rowId: `${_p}? audio`, description: `Menampilkan Menu Audio `},
          { title: 'Jadi Bot', rowId: `${_p}? jadibot`, description: `Menampilkan Menu Jadibot `},
          { title: 'Info', rowId: `${_p}? info`, description: `Menampilkan Menu info `},
          { title: 'Tanpa Kategori', rowId: `${_p}? tanpakategori`, description: `Menampilkan Menu TanpaCategory `},
          { title: 'Owner', rowId: `${_p}? owner`, description: `Menampilkan Menu Owner `},
        ]
      }
    ]
    const listMessage = {
      text: judul,
      footer: wm,
      mentions: await conn.parseMention(judul),
      title: '',
      buttonText: "Klik Disini",
      sections
    }
    await conn.send3Button(m.chat, 'Promosikan bot ini, bisa bikin #sticker loh', wm, 'Jumlah User',  '.user', 'Runtime', '.uptime', 'Group Bot', '.gcbot', m)
    return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})
    
    }

    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      ucapan: global.ucapan,
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, umur, money, age, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send3TemplateButtonImg(m.chat, fla + teks, text.trim(), wm, `🏅 Owner`, `${_p}liststaff`, `🎖Group Bot`, `${_p}gcbot`, `🎗  Dashboard  🎗`, `${_p}db`)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(m(enu)?|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi"
  }
  if (time > 10) {
    res = "Selamat siang"
  }
  if (time >= 15) {
    res = "Selamat sore"
  }
  if (time >= 18) {
    res = "Selamat malam"
  }
  return res
}