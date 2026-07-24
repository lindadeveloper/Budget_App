//to make the first letter uppercased on every word

export function titleCase(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}
