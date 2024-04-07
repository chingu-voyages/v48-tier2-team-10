// https://bobbyhadz.com/blog/javascript-get-object-key-by-value

export const getName = (obj, value, title) => {
  if (value == "N/A") {
    if (title == "Weight") {
      return "NAWeight";
    } else if (title == "Length") {
      return "NALength";
    }
  }
  return Object.keys(obj).find((key) => obj[key] === value);
};
