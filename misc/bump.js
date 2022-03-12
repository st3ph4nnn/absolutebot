module.exports = function bump(message) {
    if (message.author.bot && message.author.id == '302050872383242240' && message.embeds[0].description.includes("Check"))
        setTimeout(() => {
            console.log("disboard");
            message.channel.send(`<@&${"916859988507525161"}> please bump`)
        }, 7200000)
}