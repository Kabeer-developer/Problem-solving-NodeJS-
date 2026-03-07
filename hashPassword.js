const express = require("express");
const bcrypt = require("bcrypt")

const app = express();

app.use(express.json());

app.get("/",(req,res)=> {
    res.send("<h1>Hash Password</h1>");
});

const users = [];
app.post("/register",async (req,res)=>{
    const {username,password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    users.push({ username, password: hashedPassword });
    res.json({message : "Registered Succesfully"});
});

app.post("/login",async (req,res)=> {
    const {username,password} = req.body;
    const user = users.find(u=> u.username === username);
    if(!user){
        res.json({message : "user not found"});
    }
    const isValid = await bcrypt.compare(password,user.password);
    if(!isValid){
        return res.status(401).json({message : "Invalid Credentials"});
    }
    res.json({message : "Login Succesfull"});
});

PORT = 5000;

app.listen(PORT,()=> console.log(`server is running on http://localhost:${PORT}`))