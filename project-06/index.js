import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// JOIN -

const pathToFile = path.join(__dirname, "index.js");

// console.log(pathToFile);

const anotherPath = path.join("/users/pl", "active", "users.json");
// console.log(anotherPath);

// PARSE - metoda pozwala nam uzyskać obiekt ze ścieżki, którą przekazujemy

const parse = path.parse(__filename);
// console.log(parse);

const parse2 = path.parse(path.join(__dirname, "index.js"));
// console.log(parse2);

// console.log(path.extname("index.js"));

// console.log(path.isAbsolute("./file.js"));
// console.log(path.isAbsolute("/file.js"));

// MODUŁ OS - moduł dający nam informacje na temat systemy na którym postawiony jest nasz Node.js.

import os from "os";

const uptime = os.uptime(); // czas uruchomienia systemu
// console.log(uptime);

const homeDir = os.homedir();
console.log(homeDir);
