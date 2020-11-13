  const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "sayembed",
  aliases: ["say"],
  description: "Display all commands and descriptions",
  execute(message, args) {
    let commands = message.client.commands.array();
    if (!message.member.hasPermission('MANAGE_SERVER')) return message.reply("You don't have permission!")
    let saye = args.join(" ")
    if (!saye)
        return message.reply("Write something!")

    let sayemb = new MessageEmbed()
    .setDescription(saye)
    .setColor("#000000")
    message.channel.send(sayemb);
}
};