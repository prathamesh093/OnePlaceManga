const express = require("express");
const mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config({ path: './.env'})

const web = express();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORDMO,
    database: process.env.DATABASE
});
 
db.connect( (error)=> {
    if(error) {
        console.log(error)
    }
    else {
        console.log("MYSQL Connected...")
    }    
    
})

web.get("/", (req,res) => {
    res.send("<h1>Home Page</h1>")
});

web.listen(2309, () => {
    console.log("server started on port 2309");
})
