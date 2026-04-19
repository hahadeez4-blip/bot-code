import os
import discord
from discord.ext import commands
from discord import app_commands

intents = discord.Intents.default()
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    await bot.tree.sync()
    print(f"Logged in as {bot.user}")

@bot.tree.command(name="whoami", description="Shows your username and display name")
async def whoami(interaction: discord.Interaction):
    user = interaction.user
    await interaction.response.send_message(
        f"(username: {user.name}) (display name: {user.display_name})"
    )

bot.run(os.getenv("DISCORD_TOKEN"))
