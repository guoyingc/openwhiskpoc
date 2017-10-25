/** 
 * Return a simple greeting message for someone. 
 * 
 * @param messages
 */ 
function main(params) { 
    var messages = params.messages || params.payload || 'failed to get msg';
    for (var i = 0; i < messages.length; i++) {
        var msgobj = JSON.parse(messages[i].value);
        console.log("get log msg:"+msgobj.message);
    }
    return {}; 
} 
