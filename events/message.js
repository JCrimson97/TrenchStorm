module.exports = (client, message, Discord) => {
    const cfg = require('../config');


    if(message.content.startsWith(cfg.PREFIX)) return;
    if(message.author.bot) return console.log("A bot tried to use command.");

    const args = message.content.slice(cfg.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let cmd = client.commands.get(command);
    if(!cmd) return;

    cmd(client, message, Discord, args);
}