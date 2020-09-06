require('dotenv').config();

const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', () => {
    console.log('Logged in as '+ bot.user.tag)
    bot.user.setActivity('Serving '+ bot.guilds.cache.size +' servers');

    bot.guilds.cache.forEach((val, inx) => {
        console.log('Server:', val.name)
        console.log('ServerID: ', inx)

        console.log('# List all users out from the server')
        val.members.cache.forEach((val, inx) => {
            console.log('UserID: ', inx)
            console.log('Username: ', val.user.username)
        })

        console.log('# List all channels out from the server')
        val.channels.cache.forEach((val, inx) => {
            console.log('ChannelID:', inx)
            console.log('Channel Name:', val.name)
            console.log('Channel Type:', val.type)
        })
    })
})

bot.login(process.env.DISCORD_BOT_TOKEN)