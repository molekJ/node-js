import {
  access,
  constants,
  renameSync,
  rename,
  readdirSync,
  readdir,
  readFile,
  readFileSync,
  writeFile,
  appendFile,
} from "fs";

///* ACCESS */ dostepy do pliku, czy plik istnieje
// fs.access("./names.txt", fs.constants.F_OK, (err) => {
//   console.log(err ? "plik nie istnieje" : "plik istnieje");
// });

// access("./names.txt", constants.W_OK, (err) => {
//   console.log("Names");
//   console.log(err ? "pliku nie mozna zapisywac" : "plik mozna zapisywac");
// });

// access("./zablokowany.txt", constants.W_OK, (err) => {
//   console.log("\nZablokowany");
//   console.log(err ? "pliku nie mozna zapisywac" : "plik mozna zapisywac\n");
// });

// // RENAME // zmiana nazwy pliku

// try {
//   renameSync("uzytkownicy.txt", "users.txt");
// } catch (err) {
//   console.log(err);
// }

// rename("imiona.txt", "names.txt", (err) => {
//   if (err) return console.log(err);
//   console.log("Rename complete!");
// });

// READDIR // odczyt zawartosci pliku

// console.log(readdirSync("./"));

// readdir("./", (err, files) => {
//   if (err) return console.log("Błąd: ", err);
//   console.log("Zawartość: ", files);
// });

// readFile("names.txt", "utf-8", (err, data) => {
//   if (err) return console.log(err);
//   console.log(data);
// });
// try {
//   console.log(readFileSync("names.txt", "utf-8"));
// } catch (err) {
//   console.log(err);
// }

// WRITEFILE - zapisuje nowy plik badz nadpisuje juz istniejacy
// readFile("names.txt", "utf-8", (err, data) => {
//   if (err) return console.log(err);
//   const newData = `Nowi użytwkonicy: \n${data}`;
//   writeFile("users.txt", newData, (err) => {
//     if (err) return console.log(err);
//     console.log("Udało się zapisac w pliku");
//   });
// });

// APPENDFILE - dodaje nowe tresci do pliku

// const names = " Jan Kowalski, Jerzy Nowak";

// readFile("names.txt", (err, data) => {
//   console.log(data);
//   appendFile("users.txt", data, (err) => {
//     if (err) return console.log("Nastapil blad");
//     console.log("Udało się dodac");
//   });
// });
