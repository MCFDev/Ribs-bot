const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Informação de um profile de um madje!'),
	async execute(interaction) {
		await interaction.reply(`A tua tag: ${interaction.user.tag}\nID: ${interaction.user.id}`);
	},
};
