import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
 {await m.reply(' انتظر لحظة من فضلك ...\n █▒▒▒▒▒▒▒▒▒ ⌛️❤️‍🩹💔')}
let res = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkeysapi}`)
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButton(m.chat, 'facebook.com/profile.php?id=100090012237351', wm, json.result.female, [['♥-LuffyDev- Via Islam-♥', `/${command}`]], m)
conn.sendButton(m.chat, 'facebook.com/profile.php?id=100090069605286', wm, json.result.male, [['♥-LuffyDev- Testapp-♥', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(ppcp|tofanimes)$/i
handler.limit = false
export default handler
