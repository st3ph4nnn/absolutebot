var slurs = [ "nigga", "nigger", "nigg", "nig", "n!g", "n!gger", "n!gg" ];

module.exports = function slurs_check(message) {
    msg = message.content.replace(/\s+/g, '').toLowerCase();
    var exists = false;
    for (slur in slurs) {
        if (msg.includes(slur)) { 
            setTimeout(() => { message.delete(); }, 500); 
            exists = true;
            break;
        }
    }

    return exists;
}