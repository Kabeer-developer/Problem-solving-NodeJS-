
const http = require("http");
const server = http.createServer((req,res)=> {
   return res.end("<h1>Hello Kabeer</h1>");
});

server.listen(3000,()=> console.log("server running"));
