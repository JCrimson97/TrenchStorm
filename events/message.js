module.exports = (client, message) => {


    if(message.content.startsWith(client.config.PREFIX)) return;
    if(message.author.bot) return /*console.log("A bot tried to use command.");*/

    const args = message.content.slice(client.config.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let cmd = client.commands.get(command);
    if(!cmd) return;

    cmd(client, message, args);
}