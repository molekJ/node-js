// import http from "http";
const http = require("http");
// require - pozwala zaimportowac i uzywac modulu wbudowanego w node

const server = http.createServer((request, response) => {
  // podajemy funckje callback, ktora sie wykona, gdy ktos wejdzie na nasz server
  console.log(request.url);

  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("<h1>Hello Node!</h1>");
});

server.listen(5500, "127.0.0.1", () => console.log("server wystartował"));
// 1. okreslamy port, dowolnie (w chwili obecnej)
// 2. na jakim adresie bedzie latac
// 3. funkcja callback
