const fs = require('node:fs');
const { Client, Intents, Collection } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const slurs_check = require('./misc/slurs');
const bump = require('./misc/bump');

var activities = [
    'chatty wont let me out of his basement',
    'please stop abusing gas tanks lord',
    'use abs! to call me',
    'use abs!ask to ask me anything',
    'ari is a british bitch with bad dental care',
    'with your mom'
]

client.on("ready", () => {
    console.log("logged in");
    client.user.setActivity(activities[Math.floor(Math.random() * activities.length)]);

    setInterval(() => {
        client.user.setActivity(activities[Math.floor(Math.random() * activities.length)]);
    }, 60000);
});

client.commands = new Collection();
const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commands) {
  const commandName = file.split(".")[0];
  const command = require(`./commands/${file}`);

  console.log(`loading ${commandName}`);
  client.commands.set(commandName, command);
}

client.on("messageCreate", (message) => {
    bump(message);

    if (message.author.bot)
        return;

    slurs_check(message);

    if (!message.content.startsWith("abs!"))
        return;
    
    const args = message.content.slice("abs!".length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);

    if (!cmd)
        return;
    
    cmd.run(client, message, args);
});

client.login("OTQwMjQxMTI3NzUwMTE5NDg2.YgEhyQ.kI1nio1J0EYZFd6qL8KSUTZUWIA");