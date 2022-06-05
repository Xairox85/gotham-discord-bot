const Discord = require('discord.js')
const { prefix } = require('../config.json');

module.exports.run = async (bot, message, args) => {
        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push('Voici une liste de toutes mes commandes :');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`!avartar pour montrer votre avatar!`);

            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type == 'dm') return;
                    message.reply('Je vous ai envoyé un DM avec toutes mes commandes !');
                })
                .catch(error => {
                    console.error(`Impossible d'envoyer un DM d'aide à ${message.author.tag}.\n`, error);
                    message.reply('Il semble que je ne peut pas vous DM ! Les DM sont-ils désactivés ?');
                });
        }

        const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('N\'est pas une commande valide !');
		}

		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

		message.channel.send(data, { split: true });
}
  //name this whatever the command name is.
  module.exports.help = {
    name: "help"
  }