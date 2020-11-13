  const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  aliases: ["say"],
  description: "Display all commands and descriptions",
  execute(message, args) {

  let says = args.join(" ")
  if (!says)
    return message.reply("Write something!")

  return message.channel.send(says);
  }
};