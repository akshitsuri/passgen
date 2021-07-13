#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");

const generatePassword = require("./utils/generatePassword");
const savePassword = require("./utils/savePassword");

//adding version and description
program.version("1.0.0").description("Simple Password Generator");

//adding options
program
  .option("-l, --length <number>", "length of  password", "8")
  .option("-s, --save", "save password to passwords.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .parse();

//destructuring from the object
const { numbers, symbols, save, length } = program.opts();

//generate password
const password = generatePassword(length, numbers, symbols);

//save password
if (save) {
  savePassword(password);
}

//copy to clipboard
clipboardy.writeSync(password);

//logging the details
console.log(chalk.blue("Generated password:"), chalk.bold(password));
console.log(chalk.yellowBright("Password copied to clipboard"));
