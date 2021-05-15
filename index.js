const Discord = require('discord.js');
const client = new Discord.Client();

let { readdirSync } = require('fs');

client.config = require('./config');
client.commands = new Discord.Collection();

const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
    if (!message.content.startsWith(client.config.PREFIX) || message.author.bot) return;

    const args = message.content.slice(client.config.PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();


    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(client, message, args, Discord);
    } catch (error) {
        console.error(error);
        message.reply('There was an error trying to execute that command!');
    }
});


// Event Controller
for(const file of readdirSync('./events/')) {
    if(file.endsWith('.js')) {
        let fileName = file.substring(0, file.length - 3);
        let fileContents = require(`./events/${file}`);

        client.on(fileName, fileContents.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    }
}

client.login(client.config.TOKEN).then(() => console.log("Login successful.")).catch((e) => {
    console.log(`Login error: ${e}`);
});
