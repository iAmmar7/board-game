export const isNull = (arg) => {
  return arg === null;
};

export const isUndefined = (arg) => {
  return arg === undefined;
};

export const isArray = (arg) => {
  return Array.isArray(arg);
};

export const isObject = (arg) => {
  return !isNull(arg) && !isUndefined(arg) && arg.constructor.name === 'Object';
};

export const isEmpty = (arg) => {
  if (!arg || isNull(arg) || isUndefined(arg)) return true;

  if (isArray(arg) && arg.length < 1) return true;

  if (isObject(arg) && Object.keys(arg).length === 0 && Object.getPrototypeOf(arg) === Object.prototype) return true;

  return false;
};

export const isValidEmail = (email) => {
  const regx = /\S+@\S+\.\S+/;
  return regx.test(email);
};

export const first = (arr) => {
  if (!isArray(arr)) return;
  return arr[0];
};

export const last = (arr) => {
  if (!isArray(arr)) return;
  return arr[arr.length - 1];
};

export const randomNumberFromRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
