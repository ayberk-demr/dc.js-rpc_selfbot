const { Client } = require('discord.js-v12selfbot');
const client = new Client({checkUpdate:false});
const {token, applicID} = require("./cfg")
const { RichPresence, Util} = require('discord.js-selfbot-rpc');

client.on('ready', async() => {

    const büyükResim = await Util.getAssets(applicID, "büyükResim");
    const küçükResim = await Util.getAssets(applicID, "küçükResim");

    const presence = new RichPresence()
        .setStatus("online")
        .setType("PLAYING")
        .setName("Discord-RPC")
        .setApplicationId(applicID)
        .setDetails("Başlık")
        .setState("Düz Yazı")
        .setAssetsLargeImage(büyükResim.id)
        .setAssetsLargeText("Büyük Resim Yazısı")
        .setAssetsSmallImage(küçükResim.id)
        .setAssetsSmallText("Küçük Resim Yazısı")
    
    console.log(`${client.user.tag} -- Olarak Giriş Yapıldı.`);

    client.user.setPresence(presence.toData());
    console.log('Rich Presence Aktif Oldu...');
});

client.login(token);
