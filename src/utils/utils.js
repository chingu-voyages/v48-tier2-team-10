export const capFirstLetter = (string) => {
  const letters = string.split('')
  letters[0] = letters[0].toUpperCase()
  return letters.join('')
}
