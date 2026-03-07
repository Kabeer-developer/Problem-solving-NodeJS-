
const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.json());

app.get("/",(req,res)=> {
    res.send("<h1>Upload a File</h1>");
})

const storage = multer.diskStorage({
    destination : (req,file,cb)=> {
        cb(null,"uploads/");
    },
    filename : (req,file,cb)=> {
        cb(null,Date.now()+path.extname(file.originalname));
    }
});

const upload = multer({storage : storage});

app.post("/upload",upload.single("file"),(req,res)=> {
    if(!req.file) {
        res.json({message : "select a file"});
    }
    res.json({
        message : "File Uploaded Succesfully",
        file : req.file,
    })
})
PORT = 5000;

app.listen(PORT,()=> console.log(`API is running on http://localhost:${PORT}/`))