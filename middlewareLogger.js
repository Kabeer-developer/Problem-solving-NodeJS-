const express = require("express");
const app = express();

app.use(express.json());

function logger(req,res,next){
    console.log(`${req.method} ${req.url} ${new Date().toLocaleString()}`)
    next();
}

app.use(logger)
app.get("/",(req,res)=> {
    res.send("<h1>Logger is Working</h1>");
});

app.get("/users",(req,res)=> {
    const users=["a","b","c"];
    res.json(users);
})

PORT = 5000;

app.listen(PORT,()=> console.log(`server is running on http://localhost:${PORT}`))