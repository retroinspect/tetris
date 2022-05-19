export function randomElement(arr) {
  return arr[randomNumber(arr.length)];
}

export function randomNumber(end, start = 0) {
  return start + Math.floor(Math.random() * (end - start));
}

export function getTable(row, col, getColor = () => "#bbb") {
  return Array(row)
    .fill(Array(col).fill())
    .map((r) => Array.from(r.map((c) => getColor())));
}
