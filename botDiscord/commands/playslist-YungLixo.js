const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlistyl")
        .setDescription("Ouça as melhores músicas do Yung Lixo"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/55DsKnuc9UqJCz4E3yd5C8?si=beffaa5ffa1542b8")
    }
}