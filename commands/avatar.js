const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if (!message.mentions.users.size) {
        return message.channel.send(`Votre avatar : ${message.author.displayAvatarURL}`);
    }

    const avatarList = message.mentions.users.map(user => {
        return `${user.username}son avatar : ${user.displayAvatarURL}`;
    });

    // send the entire array of strings as a message
    // by default, discord.js will `.join()` the array with `\n`
    message.channel.send(avatarList);
}
//name this whatever the command name is.
module.exports.help = {
  name: "avatar"
}