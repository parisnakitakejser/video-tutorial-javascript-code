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

        bot.channels.cache.get(process.env.DISCORD_CHANNEL_ID).send('@everyone the bot is online and ready to help! :)')
    })
})

bot.on('message', msg => {
    if(msg.content === 'ping') {
        msg.reply('pong')
    }
})

bot.on('guildMemberAdd', member => {
    bot.channels.cache.get(process.env.DISCORD_CHANNEL_ID).send('**'+ member.user.username +'** has join the server :)')
})

bot.on('guildMemberRemove', member => {
    bot.channels.cache.get(process.env.DISCORD_CHANNEL_ID).send('**'+ member.user.username +'** has left the server :(')
})

bot.on('presenceUpdate', (oldMember, newMember) => {
    if(oldMember.status !== newMember.status) {
        bot.channels.cache.get(process.env.DISCORD_CHANNEL_ID).send('**'+ newMember.user.username +'** is now '+ newMember.status)
    }
})

bot.login(process.env.DISCORD_BOT_TOKEN)