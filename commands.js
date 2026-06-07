const { REST, Routes } = require("discord.js");

const commands = [
    {
        name: "ping",
        description: "Replies with Pong!"
    },
    {
        name: "hello",
        description: "Says hello"
    },
    {
        name: "server",
        description: "Shows server name"
    },
    {
        name: "user",
        description: "Shows your username"
    },
    {
        name: "avatar",
        description: "Shows your avatar"
    },
    {
        name: "coinflip",
        description: "Flip a coin"
    }
];

const rest = new REST({ version: "10" }).setToken("YOUR_BOT_TOKEN");

(async () => {
    await rest.put(
        Routes.applicationCommands("YOUR_CLIENT_ID"),
        { body: commands }
    );

    console.log("Commands registered.");
})();
