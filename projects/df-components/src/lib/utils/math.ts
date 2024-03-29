export const clamp = (num, min, max) => {
  return num <= min ? min : num >= max ? max : num
}

export const generateGUID = () => {
  // Public Domain/MIT
  let d = new Date().getTime()
  if (
    typeof performance !== "undefined" &&
    typeof performance.now === "function"
  ) {
    d += performance.now() //use high-precision timer if available
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    // tslint:disable-next-line: no-bitwise
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    // tslint:disable-next-line: no-bitwise
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16)
  })
}
