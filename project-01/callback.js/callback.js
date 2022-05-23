// const add = (x, y) => x + y;
// const division = (number1, number2) => number1 / number2;

// const math = (a, b, callback) => {
//   console.log(callback(a, b));
// };

// math(2, 5, add);
// math(10, 2, division);

// setTimeout(() => {
//   console.log("Co u Cb");
// }, 2000);
// console.log("Halo");

const fs = require("fs");

fs.readFile("./text.txt", "utf8", (err, file) => console.log(file));
// sciezka pliku, sposob zapisu, callback
// asynchroniczne

console.log("przed odczytaniem");
