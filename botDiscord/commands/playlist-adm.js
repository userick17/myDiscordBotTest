const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlistadm")
        .setDescription("Ouça as favoritas dos ADMs"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/1PZo50MipmGBbvB3VvpwFB?si=d282f2c8bb4047d1")
    }
}