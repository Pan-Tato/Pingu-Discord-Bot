const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder } = require('discord.js');
const embed = new EmbedBuilder();

const guild = null

module.exports = {
    data: new SlashCommandBuilder()
        .setName("test")
        .setDescription("test slash command")
        .addUserOption(
            option => option
                .setName("user")
                .setDescription("A test command... that's all...")
        ),
    run: async (interaction) => {
        const user = interaction.options.getUser("user") || interaction.member.user

        const balanceEmbed = new EmbedBuilder()
            .setTitle(`${user.username}'s test command.. nothing more.. `)
            //.setDescription("")
            .setColor(0x0099FF)
            .setThumbnail(user.displayAvatarURL())
        //.addFields(
        //    {
        //      name: 
        //      value: 
        //      inline: true
        //    })

        return interaction.reply({
            embeds: [balanceEmbed]
        })
    }
}