const { EmbedBuilder, Colors } = require("discord.js");

exports.run = async (client, message, args) => {
  
  const embed = new EmbedBuilder()
  .setTitle("Test Command")
  .setDescription("Tested!")
  .setColor(Colors.Blue)
  .setTimestamp()
  
  return message.reply({ embeds: [embed]}).catch(err => {})
};

exports.conf = {
  aliases: ["t"]
};

exports.help = {
  name: "test"
};