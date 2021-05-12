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

client.login(Config.TOKEN).then(r => console.log("Login successful."));