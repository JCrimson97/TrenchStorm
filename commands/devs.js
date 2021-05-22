module.exports = {
    name: 'devs',
    execute(client, message, args, Discord) {

        const devsEmbed = new Discord.MessageEmbed()
            .setTitle("🔧 | Developers")
            .setColor("RANDOM")
            .addField(`Project Developers`, `<@!624307263569657867>.`);

        message.channel.send({embed: devsEmbed});
    },
};
