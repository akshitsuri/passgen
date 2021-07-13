const program = require("commander");

program.version("1.0.0").description("Simple Password Generator");

program.option("-l, --length <number>", "length of  password", "8").parse();

console.log(program.opts());
