const Discord = require('discord.js');
const client = new Discord.Client();
const Config = require('./config');

let { readdirSync } = require('fs');
let commands = new Discord.Collection();


// Command Controller
for(const file of readdirSync('./commands/')) {
    if(file.endsWith('.js')) {
        let fileName = file.substring(0, file.length - 3);
        let fileContents = require(`./commands/${file}`);

        commands.set(fileName, fileContents);
    }
}


// Event Controller
for(const file of readdirSync('./events/')) {
    if(file.endsWith('.js')) {
        let fileName = file.substring(0, file.length - 3);
        let fileContents = require(`./events/${file}`);

        client.on(fileName, fileContents.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    }
}

client.login(Config.TOKEN).then(() => console.log("Login successful.")).catch((e) => {
    console.log(`Login error: ${e}`);
});
