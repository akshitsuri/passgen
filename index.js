const program = require("commander");

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
console.log(password);