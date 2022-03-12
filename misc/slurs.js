var slurs = [ "nigga", "nigger", "nigg", "nig", "n!g", "n!gger", "n!gg" ];

module.exports = function slurs_check(message) {
    msg = message.content.replace(/\s+/g, '').toLowerCase();

    slurs.forEach(slur => {
        if (slur.includes(msg)) { 
            setTimeout(() => { message.delete(); }, 500); 
            return true; 
        }
    });

    return false;
}