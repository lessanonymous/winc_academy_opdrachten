const {
  passwordVerifier,
  isNotBlank,
  isLessThan9Chars,
  hasUppercase,
  hasLowercase,
  hasDigit,
} = require("./passwordVerifier.js");

test("Checks if password is not blank", () => {
  const password1 = "password";
  const password2 = "";
  expect(isNotBlank(password1)).toBe(true);
  expect(isNotBlank(password2)).toBe(false);
});

test("Checks if password has less than 9 characters", () => {
  const password1 = "password";
  const password2 = "password123";
  expect(isLessThan9Chars(password1)).toBe(true);
  expect(isLessThan9Chars(password2)).toBe(false);
});

test("Checks if password has uppercase characters", () => {
  const password1 = "password";
  const password2 = "paSsword";
  const password3 = "paSswoRd";
  expect(hasUppercase(password1)).toBe(false);
  expect(hasUppercase(password2)).toBe(true);
  expect(hasUppercase(password3)).toBe(true);
});

test("Checks if password has lowercase characters", () => {
  const password1 = "PASSWORD";
  const password2 = "PASSwORD";
  const password3 = "paSswoRd";
  expect(hasLowercase(password1)).toBe(false);
  expect(hasLowercase(password2)).toBe(true);
  expect(hasLowercase(password3)).toBe(true);
});

test("Checks if password has digits", () => {
  const password1 = "PASSWORD";
  const password2 = "PASSwORD1";
  const password3 = "paSswoRd123";
  expect(hasDigit(password1)).toBe(false);
  expect(hasDigit(password2)).toBe(true);
  expect(hasDigit(password3)).toBe(true);
});

test("Checks if password is valid", () => {
  const password1 = "henkie1";
  const password2 = "1234a";
  const password3 = "z";
  const password4 = "henkie1234";
  const password5 = "HENKhenk";
  const password6 = "HENK33$";
  const password7 = "1234";
  const password8 = "";
  expect(passwordVerifier(password1)).toEqual({ score: 4, valid: true });
  expect(passwordVerifier(password2)).toEqual({ score: 4, valid: true });
  expect(passwordVerifier(password3)).toEqual({ score: 3, valid: true });
  expect(passwordVerifier(password4)).toEqual({ score: 3, valid: true });
  expect(passwordVerifier(password5)).toEqual({ score: 4, valid: true });
  expect(passwordVerifier(password6)).toEqual({ score: 0, valid: false });
  expect(passwordVerifier(password7)).toEqual({ score: 0, valid: false });
  expect(passwordVerifier(password8)).toEqual({ score: 0, valid: false });
});
