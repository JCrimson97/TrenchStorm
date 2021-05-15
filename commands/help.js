module.exports = {
    name: 'help',
    execute(client, message, args, Discord) {
        let clientCommands = [`\`${client.config.PREFIX}help\``, `\`${client.config.PREFIX}ping\``]

        const helpEmbed = new Discord.MessageEmbed()
            .setTitle("❓| Help incoming")
            .setColor("RANDOM")
            .addField(`General commands`, clientCommands.join(', '));

        message.channel.send({embed: helpEmbed});
    },
};
