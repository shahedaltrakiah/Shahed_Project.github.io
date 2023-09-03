const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "login",
  });

  app.post("/create", (req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;
    
    db.query(
      "INSERT INTO data (email, pass) VALUES (?,?)",
      [email, pass],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
       
          res.send("Values Inserted");
        }
      }
    );
  });
  
  app.post("/login", (req, res) => {
    const email = req.body.email;
    db.query("SELECT * FROM data where email=?",email, (err, result) => {
      if (err) return console.log(err);
      
     if (result.length > 0){
            res.send(result);
     }
     else {
        return res.json("no record")
     }
      
    });
  });

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
  });