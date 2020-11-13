const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("Razior Help")
      .setThumbnail("https://cdn.discordapp.com/avatars/535812019157205006/8623d9b2301c8f2b4279029b53296b7d.png?size=256")
      .setDescription("All commands")
      .setFooter("Listening And Chill!")
      .addField(":hammer_pick: General", "``/invite(inv)``, ``/say``")
      .addField(":warning: Moderation", "``/sayembed``, ``/warn``")
      .addField("🎶 Music", "``/help(h)``, ``/np``, ``/playlist(pl)``, ``/remove(rm)``, ``/shuffle``, ``/stop``, ``/loop(l)``, ``/pause``, ``/resume(r)``, ``/skip(s)``, ``/play(p)``, ``/queue(q)``, ``/search``, ``/skipto(st)``, ``/volume(v)``")
      .setColor("#000000");
    return message.channel.send(helpEmbed).catch(console.error);
  }
};
