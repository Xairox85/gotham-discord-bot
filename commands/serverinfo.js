const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.channel.send(`Le nom de ce serveur est : ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
}
//name this whatever the command name is.
module.exports.help = {
  name: "serverinfo"
}