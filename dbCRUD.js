
const express = require("express");
const connectDb = require("./db");
const User = require("./schema");

const app = express();
connectDb();

app.use(express.json());

app.get("/", (req,res)=> {
    res.send("OK");
});

app.post("/register",async (req,res)=> {
    try{
        const {username,password} = req.body;
        const exist = await User.findOne({username});
        if(exist){
            return res.status(400).json({message : "user already exist"});
        }

        const newUser = new User({username,password});
        await newUser.save();
        res.status(201).json({message: "created succesfully", user : newUser});
    } catch(e){
        res.json(e);
    }
});



PORT = 5000;
app.listen(PORT,()=> console.log(`Server running on http://localhost:${PORT}`));