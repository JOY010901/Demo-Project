const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})

app.post('/signup',(req,res) =>{
    const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES(?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login',(req,res) =>{
    const sql = "SELECT * FROM  login WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(data.length > 0) {
            return res.json("Success");
        } else{
            return res.json("fail");
        }
    })
})


app.get("/Home", (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
        if(err){ 
            return res.json("ERROR");
        }
        return res.json(data);
    })
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO student (`fullname`, `address`, `phone`, `city`, `state`, `pincode`, `physicsmarks`, `chemistrymarks`, `mathsmarks`, `totalpercentage`) VALUES(?)";
    const values = [
        req.body.fullname,
        req.body.address,
        req.body.phone,
        req.body.city,
        req.body.state,
        req.body.pincode,
        req.body.physicsmarks,
        req.body.chemistrymarks,
        req.body.mathsmarks,
        req.body.totalpercentage
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json("ERROR");
        }
        return res.json(data);
    })
})

app.listen(8081, ()=> {
    console.log("listening")
})
