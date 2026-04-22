import express from "express"
import dotenv from "dotenv"
dotenv.config();
const app = express();

app.use(express.json());

app.get("/",(req,res)=> {
    res.send("<h1>API is Running</h1>");
});

app.get("/users",(req,res)=> {
    const users=["a","b","c"];
    res.json(users);
})


app.listen(process.env.PORT,()=> console.log(`server is running on http://localhost:${process.env.PORT}`))