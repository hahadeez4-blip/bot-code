import discord
from discord.ext import commands
from discord import app_commands
import os

intents = discord.Intents.default()
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    try:
        await bot.tree.sync()
        print("Slash commands synced")
    except Exception as e:
        print(e)

    print(f"Logged in as {bot.user}")

bot.run(os.getenv("DISCORD_TOKEN"))
