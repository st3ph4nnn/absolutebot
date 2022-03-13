const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "embed",
    run: (client, message, args) => {

        var embed = new MessageEmbed();

        message.reply("Please type, in order, the title, description, and color of the embed, one line after each").then(msg => {
            setTimeout(() => msg.delete(), 5000)
        });

        message.channel.send("If you would like to cancel, just type cancel") .then(msg => {
            setTimeout(() => msg.delete(), 5000);
        });

        const filter = m => m.author.id === message.author.id;
        const collector = message.channel.createMessageCollector({ filter, max: 3, time: 60000 });

        const array = [];

        collector.on('collect', m => {
            if (m.content.toLowerCase() == 'cancel')
                return;

            array.push(m.content);

            setTimeout(() => {m.delete()}, 500);
        });

        collector.on('end', collected => {
            if (array.length != 3) {
                message.reply("Not enough elements");
                return;
            }

            embed.setTitle(array[0]).setDescription(array[1]).setColor(array[2]);
            embed.setTimestamp();
            message.channel.send({ embeds: [embed]});
            setTimeout(() => {message.delete()}, 500);
        });
    }
}