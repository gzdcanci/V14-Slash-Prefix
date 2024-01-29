
# V14-Slash&Prefix

A Bot Infrastructure Supported by NodeJS V14 Version, Capable of Running Slash and Prefix Commands Simultaneously.

- You can write your own commands with **Slash** and **Prefix** command examples in the infrastructure content!
## Requirements
- NodeJS V16+
- Discord Token, You can get it here. [Discord Developers Portal](https://discord.com/developers/applications)
- Intents, you can open it here. [Discord Developers Portal](https://discord.com/developers/applications)
## Features

- Supports Slash Commands
- Supports Prefix Commands and Aliases
- Event Supports
- Allows you to Categorize Commands
## Installation & Setup

### Installation
1-) Clone the project
```bash
npm clone https://github.com/Slayerx10/V14-Slash-Prefix.git
```
2-) Change directory
```bash
cd V14-Slash-Prefix
```
3-) Install NPM packages
```bash
npm install
```
### Setup
1-) `config.js` Customize the content of its file according to your bot
```bash
module.exports = {
    token: "", // Enter your bot token
    prefix: "", // Enter the prefix you want to use in your bot
    botStatus: "" // Enter the text you want your bot to write in the status of your bot
}
```
2-) Start bot
```bash
node index.js
```
## Common Errors

##### 1-) `cannot find module module_name` Error

This error is frequently encountered. To resolve the error, you can download the missing module using the following commands;

This command downloads only the specified module.
```bash
npm install module_name
```
This command downloads all the modules integrated in the project.
```bash
npm install
```
##### 2-) `Application_Commands_Duplicate_Name` Error

This error usually occurs when two or more commands have the same name in your **Slash** commands. You can solve this error by changing their names.

##### 3-) `Error [TokenInvalid]: An invalid token was provided.` Error

This error can also appear as `unexpected token` error. You can fix the error by correcting the **token** section in the `config.js` file.

##### 4-) `const chalk = require("chalk");` Error

You can use the following commands to resolve this recent error in the NPM package;
```bash
npm uninstall chalk
npm install chalk@2
```
## Recommended Reading for Glitch Users

When using infrastructure via Glitch, most of the projects automatically come with pnpm turned off. This prevents you from installing npm packages. You can solve this problem by opening pnpm. To open it;
```bash
enable-pnpm
```
## Main Modules Used

[Node.JS](https://nodejs.org/)

[Discord.JS](https://discord.js.org/#/)

[NPM](https://www.npmjs.com)
## Remember to leave ⭐ to support the project!
## License
Distributed under the Apache-2.0 License. For more information, see
[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)

- [@Slayerx10](https://github.com/Slayerx10)
