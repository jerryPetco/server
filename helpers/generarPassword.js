const generatePassword = (
  mayus = false,
  min = false,
  sim = false,
  num = false,
  length
) => {
  let passwordChars = `${min === true ? "abcdefghijklmnopqrstuvwxyz" : ""}${
    num === true ? "0123456789" : ""
  }${mayus === true ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : ""}${
    sim === true ? "!#$%&()*+,-./:;<=>?@[\\]^_{|}~" : ""
  }`;

  let password = Array(length)
    .fill(passwordChars)
    .map((x) => {
      return x[Math.floor(Math.random() * x.length)];
    })
    .join("");
  return password;
};

export default generatePassword;
