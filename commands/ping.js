module.exports = {
    name: 'ping',
    execute(client, message, args, Discord) {
        console.log("Pong!")

        let ping = client.ws.ping;

        const pingEmbed = new Discord.MessageEmbed()
            .setTitle("🏓 | Pong!")
            .setDescription(`My ping is of about ${ping}ms.`)
            .setColor("RANDOM");

        message.channel.send({embed: pingEmbed});
    },
};
