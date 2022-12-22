const generatePassword = () => {
  let passwordChars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!*";

  let passLength = 12;

  let password = Array(passLength)
    .fill(passwordChars)
    .map((x) => {
      return x[Math.floor(Math.random() * x.length)];
    })
    .join("");

  return password;
};

export default generatePassword;
