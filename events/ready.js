const { REST } = require('@discordjs/rest');
const { Routes, Client, GatewayIntentBits, EmbedBuilder, Collection, Intents, ActivityType } = require('discord.js');
const { bot_token, mongo_url } = require("../config.json")
const fs = require('node:fs');

module.exports = async (client) => {
    client.user.setStatus('dnd');
    client.user.setActivity('you complete missions from the shadows...', { type: 'WATCHING' });
    console.log("Client is connected to discord as", client.user.tag)

    const commands = [];
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    const clientId = '1017829618763440158';
    const guildId = null

    for (const file of commandFiles) {
        const command = require(`../commands/${file}`);
        commands.push(command.data.toJSON());
    }


    const rest = new REST({ version: '10' }).setToken(bot_token);

    (async () => {
        try {
            console.log(`Started refreshing ${commands.length} application (/) commands.`);

            await rest.put(
                Routes.applicationCommands(clientId),
                { body: commands },
            );

            console.log(`Successfully reloaded ${commands.length} application (/) commands.`);
        } catch (error) {
            console.error(error);
        }
    })()
}