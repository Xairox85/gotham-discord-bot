const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if (message.deletable) {
        message.delete();
    }

    // Member doesn't have permissions
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Vous ne pouvez pas supprimer les messages....").then(m => m.delete(5000));
    }

    // Check if args[0] is a number
    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("Ouais.... Ce n'est pas un numéro ? Au fait, je n'arrive pas non plus à supprimer 0 message.").then(m => m.delete(5000));
    }

    // Maybe the bot can't delete messages
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Désolé... Je ne peux pas supprimer les messages.").then(m => m.delete(5000));
    }

    let deleteAmount;

    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true)
        .then(deleted => message.channel.send(`J'ai supprimé \`${deleted.size}\` messages.`))
        .catch(err => message.reply(`Quelque chose a mal tourné... ${err}`));
    }   

//name this whatever the command name is.
module.exports.help = {
  name: "clear"
}
