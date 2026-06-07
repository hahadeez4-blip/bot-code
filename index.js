const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("interactionCreate", async interaction => {
    if (!interaction.isChatInputCommand()) return;

    switch (interaction.commandName) {
        case "ping":
            await interaction.reply("Pong!");
            break;

        case "hello":
            await interaction.reply(`Hello ${interaction.user.username}!`);
            break;

        case "server":
            await interaction.reply(`Server: ${interaction.guild.name}`);
            break;

        case "user":
            await interaction.reply(`Username: ${interaction.user.username}`);
            break;

        case "avatar":
            await interaction.reply(interaction.user.displayAvatarURL());
            break;

        case "coinflip":
            await interaction.reply(
                Math.random() < 0.5 ? "Heads!" : "Tails!"
            );
            break;
    }
});

client.login(process.env.TOKEN);
