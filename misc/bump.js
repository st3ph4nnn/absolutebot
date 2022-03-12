module.exports = function bump(message) {
    if ( message.embeds[0].description.includes("Check") && message.author.id == '302050872383242240')
        setTimeout(() => {
            console.log("disboard");
            message.channel.send(`<@&${"916859988507525161"}> please bump`)
        }, 7200000)
}