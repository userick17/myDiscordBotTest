// Require the necessary discord.js classes
const { Client, GatewayIntentBits, Collection } = require('discord.js');

//dotenv
const dotenv = require('dotenv');
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

//importação dos comandos
const fs = require("node:fs");
const path = require("node:path");

const commandsPath = path.join(__dirname, "commands");
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));
console.log(commandsFiles);

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

for (const file of commandsFiles){
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	if ("data" in command && "execute" in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`Esse Comando em ${filePath} está com data ou "execute ausentes"`);
	}
}

// Login do BOT
client.once('ready', readyClient => { // Alteração aqui
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(TOKEN);

// Listener de interações
client.on('interactionCreate', async interaction => { // Alteração aqui
	if (!interaction.isCommand()) return;
	const command = client.commands.get(interaction.commandName);
	if (!command) {
		console.error("Comando não encontrado");
		return;
	}
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply("Houve um erro ao executar esse comando");
	}
});
