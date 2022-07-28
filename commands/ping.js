const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Faz o bot dizer "Pong!"'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
