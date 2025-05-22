export function getWedding() {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/wedding`)
}
