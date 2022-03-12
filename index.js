const fs = require('node:fs');
const { Client, Intents, Collection } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const slurs_check = require('./misc/slurs');
const bump = require('./misc/bump');

client.on("ready", () => {
    console.log("logged in");
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

    if (message.author.bot || slurs_check(message))
        return;

    if (!message.content.startsWith(process.env.PREFIX))
        return;
    
    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);

    if (!cmd)
        return;
    
    cmd.run(client, message, args);
});

client.login(process.env.TOKEN);