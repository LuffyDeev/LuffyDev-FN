import  fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text'
  m.reply('_المرجو الانتظار..._')
  let res = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${response[0]}`
  conn.sendFile(m.chat, res, 'Noureddine.jpg', `facebook.com/profile.php?id=100090012237351`, m, false)
}
handler.help = ['flaming1'].map(v => v + ' <text>')
handler.tags = ['maker','logo']
handler.command = /^(logo1)$/i
export default handler
