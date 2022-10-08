let handler = async(m, { conn, usedPrefix, command, args, text, }) => {

    let ras = `Halo Kak @${m.sender.split('@')[0]}`

    let sel = `Berikut Ini Adalah List Store NdaaBotz ( Cuma Nyoba Cok Belum 100% Jadi )`

    let rs = `Pilih Disini`

const sections = [ {

	title: `Silahkan Pilih List Type Store Dibawah!`,

	rows: [

	{title: `Store Ndaa`, rowId: `.owner`, description: `Menjual Bot Whatsapp`},

        {title: `Store Vinz`, rowId: `.storevinz`, description: `Menjual Berbagai Jasa Growtopia`},

	{title: `Buy Slot`, rowId: `.owner`, description: ``},

	{title: `Buy Slot`, rowId: `.owner`, description: ``},

	{title: `Buy Slot`, rowId: `.owner`, description: ``},

	{title: `Buy Slot`, rowId: `.owner`, description: ``},

	{title: `Buy Slot`, rowId: `.owner`, description: ``},

	{title: `Buy Sloy`, rowId: `.owner`, description: ``},

	{title: `Buy Slot`, rowId: `.owner`, description: ``},

	{title: `Buy Slot`, rowId: `.owner`, description: ``},

	{title: `Buy Slot`, rowId: `.owner`, description: ``},

	{title: `Buy Slot`, rowId: `.owner`, description: ``},

               ]

    } ]

const listMessage = {

  text: sel,

  mentions: [m.sender],

  footer: wm,

  title: ras,

  buttonText: rs,

  sections

}

    if(!args[1]) await conn.sendMessage(m.chat, listMessage, { quoted: m })

}

handler.help = ['storelist']

handler.tags = ['new', 'jb']

handler.command = /^(storelist|liststore)$/i

module.exports = handler