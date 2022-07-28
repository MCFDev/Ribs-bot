const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server info!'),
	async execute(interaction) {
        await interaction.reply(`Nome: ${interaction.guild.name}\nRibeirenses: ${interaction.guild.memberCount}\nID: ${interaction.guild.id}`);
	},
};