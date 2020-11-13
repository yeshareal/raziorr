const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "warn",
  aliases: [""],
  description: "Display all commands and descriptions",
  execute(message, args) {

    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("You don't have permission!")
    let warntags = message.mentions.members.first()
    if (!warntags)
        return message.reply("Tag members for warnings!")
    let warnreason = args.slice(1).join(" ")
    if (!warnreason)
        return message.reply("Give reason for warnings!")

    return message.channel.send(`${warntags} Has been warned by ${message.author}, Reason: ${warnreason}!`)
}
};