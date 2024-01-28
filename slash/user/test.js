const { EmbedBuilder, Colors } = require("discord.js");

module.exports = {
  name: "test",
  description: "A test command to check if the bot responds.",
  options: [],
  run: async (client, interaction) => {
    
    const embed = new EmbedBuilder()
    .setTitle("Test Command")
    .setDescription("Tested!")
    .setColor(Colors.Blue)
    .setTimestamp()
    
    return interaction.reply({ embeds: [embed]}).catch(err => {})
  },
};