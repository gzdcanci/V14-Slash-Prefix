const { Collection } = require("discord.js")
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const chalk = require("chalk");
const path = require("path");
const fs = require("fs")

const client = require("../index");
const config = require("../config.js");

client.on("ready", () => {
  
  client.prefixCommands = new Collection();
  client.prefixAliases = new Collection();
  client.slashCommands = new Collection();
  const slashCommandsLoader = []
  
  // Slash Commands Loadder //
  
  const slashCommandFolders = fs.readdirSync('./slash');
  for (const folder of slashCommandFolders) {
    const folderPath = path.join('./slash', folder);
    const commandFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'));
    
    for (const file of commandFiles) {
      const filePath = path.join(folderPath, file);
      const props = require("../" + filePath);
      
      client.slashCommands.set(props.name, props);
      slashCommandsLoader.push({
        name: props.name,
        description: props.description,
        options: props.options
      });
      console.log(chalk.green`➤ Slash | ${props.name}/${folder} Command Loadded!`)
    }
  }
  
  const rest = new REST({ version: "10" }).setToken(config.token);
  (async () => {
    try {
      await rest.put(Routes.applicationCommands(client.user.id), {
        body: await slashCommandsLoader,
      });
      console.log(chalk.green`Successfully loadded application [/] commands.`);
    } catch (e) {
      console.log(chalk.magenta`Failed to load application [/] commands. ` + e);
    }
  })();
  
  // Prefix Commands Loadder //
  
  const prefixCommandFolders = fs.readdirSync('./prefix');
  for (const folder of prefixCommandFolders) {
    const folderPath = path.join('./prefix', folder);
    const commandFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'));
    
    for (const file of commandFiles) {
      const filePath = path.join(folderPath, file);
      const props = require("../" + filePath);

      console.log(chalk.green`➤ Prefix | ${props.help.name}/${folder} Command Loadded!`)
      client.prefixCommands.set(props.help.name, props);
      
      props.conf.aliases.forEach(alias => {
       client.prefixAliases.set(alias, props.help.name);
      });
    }
  }


    console.log(chalk.green`──────────────────────────────────────────
➤ | ${client.user.tag} Online! | Developed By Slayerx10, For Infinite Imagine ♥
──────────────────────────────────────────`)
    client.user.setActivity(config.botStatus || "Infinite Imagine ♥ ");

    process.title = config.botStatus + " | Developed By Slayerx10, For Infinite Imagine ♥"
});