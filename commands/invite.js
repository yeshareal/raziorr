const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("Razior Bot Invite")
      .setThumbnail("https://cdn.discordapp.com/avatars/535812019157205006/8623d9b2301c8f2b4279029b53296b7d.png?size=256")
      .setDescription("**[Invite Link](http://bit.ly/raziorr)**")
      .addField("Developer Bot by", "kenn#1680")
      .setFooter("Listening And Chill!")
      .setColor("#000000");
    return message.channel.send(helpEmbed).catch(console.error);
  }
};