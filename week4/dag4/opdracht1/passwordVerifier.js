// Voor elke conditie maken we een interne check
const isNotBlank = (pw) => (pw ? true : false);
const isLessThan9Chars = (pw) => pw.length < 9;
const hasUppercase = (pw) => {
  const regex = /[A-Z]/g;
  const uppercase = pw.match(regex);
  return uppercase ? true : false;
};
const hasLowercase = (pw) => {
  const regex = /[a-z]/g;
  const lowercase = pw.match(regex);
  return lowercase ? true : false;
};
const hasDigit = (pw) => {
  const regex = /[0-9]/g;
  const digits = pw.match(regex);
  return digits ? true : false;
};
const passwordVerifier = function (password) {
  // We tellen het aantal requirements waar het wachtwoord aan moet voldoen
  let score = 0;

  // Voor elke requirement die waar is, tel 1 punt op
  if (isNotBlank(password)) score++;
  if (isLessThan9Chars(password)) score++;
  if (hasUppercase(password)) score++;
  if (hasDigit(password)) score++;
  if (hasLowercase(password)) {
    score++;
  } else {
    // Voor deze requirement maken een uitzondering; reset de score als hier niet aan wordt voldaan
    score = 0;
  }

  // Markeer het wachtwoord als valide als er een score van minimaal 3 is
  return {
    score: score,
    valid: score >= 3,
  };
};

module.exports = {
  passwordVerifier,
  isNotBlank,
  isLessThan9Chars,
  hasUppercase,
  hasLowercase,
  hasDigit,
};
