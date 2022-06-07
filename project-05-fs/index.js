import {
  access,
  constants,
  renameSync,
  rename,
  readdirSync,
  readdir,
} from "fs";

///* ACCESS */
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

// // RENAME //

// try {
//   renameSync("uzytkownicy.txt", "users.txt");
// } catch (err) {
//   console.log(err);
// }

// rename("names.txt", "imiona.txt", (err) => {
//   if (err) return console.log(err);
//   console.log("Rename complete!");
// });

// READDIR

// console.log(readdirSync("./"));

readdir("./", (err, files) => {
  if (err) return console.log("Błąd: ", err);
  console.log("Zawartość: ", files);
});
