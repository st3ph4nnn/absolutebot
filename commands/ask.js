var replies = [ "Yes", "No", "Maybe", "Unsure", "Definetely", "ON GOD", "YES LOL", "Nah :skull:", "Hahaha", "Bleah", "wtf no", "What the hell :skull:" ];

var good = [ "ON GOD", "Yes", "Definetely", "YES LOL" ];

module.exports = {
    name: 'ask',
    run: (client, message, args) => {
        if (!args[0])
            return;

    message.reply(replies[Math.floor(Math.random() * replies.length)]);
    }
}