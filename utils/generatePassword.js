//all the possible charachters for the password
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

//helper function
const fetchPassword = (length, chars) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

const generatePassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let chars = alpha;

  if (hasNumbers) char += numbers;
  if (hasSymbols) char += symbols;

  return fetchPassword(length, chars);
};

module.exports = generatePassword;
