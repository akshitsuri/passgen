const program = require("commander");

program.version("1.0.0").description("Simple Password Generator");

program
  .option("-l, --length <number>", "length of  password", "8")
  .option("-s, --save", "save password to passwords.txt")
  .parse();

console.log(program.opts());
