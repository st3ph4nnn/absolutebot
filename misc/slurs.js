var slurs = [ "nigga", "nigger", "nigg", "nig", "n!g", "n!gger", "n!gg" ];

module.exports = function slurs_check(message) {
    msg = message.content.replace(/\s+/g, '').toLowerCase();
    
    for (var i = 0; i < slurs.length; i++)
        if ((msg.toLowerCase().includes(slurs[i]) || msg.includes('discord.gg/'))) {
            setTimeout(() => {message.delete()}, 500);  
            break;
        }
}