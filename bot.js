const Discord = require("discord.js")
const client = new Discord.Client();
var prefix = "$"

client.on('message', function(message) {
	const myID = "368768446327947265";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "sn")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('**آكتـب الحالة التي تريدهـآ..**');
        client.user.setUsername(args);
        message.channel.send('**SetName,Done!**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "st")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('**آكتـب الحالة التي تريدهـآ..**');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send('**Streaming,Done!🎶**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "pl")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('**آكتـب الحالة التي تريدهـآ..**');
        client.user.setGame(args);
        message.channel.send('**Playing,Done!🎶**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "li")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('**آكتـب الحالة التي تريدهـآ..**');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send('**Listening,Done!🎶**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "wa")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('**آكتـب الحالة التي تريدهـآ..**');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send('**Watching,Done!🎶**').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "sa")) {
				        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('**آكتـب الحالة التي تريدهـآ..**');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});


client.login(process.env.BOT_TOKEN); 
