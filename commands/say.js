const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete();

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.reply("Vous n'avez pas les autorisations requises pour utiliser cette commande.").then(m => m.delete(5000));

    if (args.length < 0)
        return message.reply("Rien à dire ?").then(m => m.delete(5000));

    const roleColor = message.guild.me.highestRole.hexColor;

    if (args[0].toLowerCase() === "embed") {
        const embed = new RichEmbed()
            .setDescription(args.slice(1).join(" "))
            .setColor(roleColor === "#000000" ? "#ffffff" : roleColor);

        message.channel.send(embed);
    } else {
        message.channel.send(args.join(" "));
    }
}
//name this whatever the command name is.
module.exports.help = {
  name: "say"
}