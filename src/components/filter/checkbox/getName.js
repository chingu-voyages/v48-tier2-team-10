// https://bobbyhadz.com/blog/javascript-get-object-key-by-value

export const getName = (obj, value) => {
  return Object.keys(obj).find((key) => obj[key] === value);
};
