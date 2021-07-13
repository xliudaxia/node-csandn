// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
let a = '123';
let b = Object.defineProperty({}, 'name', {
  value: a,
  writable: true,
  enumerable: true,
  configurable: true
});
console.log(b);
