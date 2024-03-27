const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("pling")
		.setDescription("Sadness"),

	async execute (interaction) {
		await interaction.reply( " https://tenor.com/view/dark-souls-parry-gwyn-boss-gif-19051216 pling pling plong, pling pling pling, pling plong ")
	}
}
