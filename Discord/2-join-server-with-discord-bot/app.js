require('dotenv').config();

const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', () => {
    console.log('Logged in as '+ bot.user.tag)
    bot.user.setActivity('Serving '+ bot.guilds.cache.size +' servers');
})

bot.login(process.env.DISCORD_BOT_TOKEN)