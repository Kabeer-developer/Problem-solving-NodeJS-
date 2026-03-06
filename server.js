
const http = require("http");
const server = http.createServer((req,res)=> {
    res.end("<h1>Hello World</h1>");
});
const PORT = 3000;
server.listen(PORT,()=> console.log(`server running on http://localhost:${PORT}`));