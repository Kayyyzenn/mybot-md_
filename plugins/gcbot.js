let handler = async (m, { conn, usedPrefix }) => { 
      conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 25000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
Group #1 : https://chat.whatsapp.com/D4VFjrhnyQRDPcvS5MfY5g

Group #2 : https://chat.whatsapp.com/LWq8dQHibT8HANSxxK5FV4

Group #3 : https://chat.whatsapp.com/HUlYch4vDIPFbOexTMCJYK
`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['gcbot']
handler.tags = ['main', 'new']
handler.command = /^(gcbot)$/i

module.exports = handler