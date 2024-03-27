const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor("Orange")
	.setTitle("Comandos do Terminal")
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: 'cat [nome-do-arquivo]', value: 'Exibe a informação de um aruivo de texto', inline: true },
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("git")
        .setDescription("Relembrar comandos do Git"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}