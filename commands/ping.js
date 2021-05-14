module.exports = async(client, message, Discord, args) => {
    let ping = client.ws.ping;

    const pingEmbed = new Discord.MessageEmbed()
        .setTitle("Pong!")
        .setDescription(`My ping is ${ping}`);

    await message.channel.send({embed: pingEmbed});
}