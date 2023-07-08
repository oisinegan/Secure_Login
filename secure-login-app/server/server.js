const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "sqlpassword",
  database: "SecureLogin",
});


//////////////////////////////////////////////
//CONNECTION NOT CLOSED!!!!!!!!!
/////////////////////////////////////////////

app.post("/registerUser", (req, res) => {
  connection.connect();
  let userInfo = req.body;
  console.log(userInfo);

  let sql =
    "INSERT INTO `SecureLogin`.`User` (`fName`, `lName`, `Email`, `Pass`) VALUES ('" +
    userInfo.fName +
    "', '" +
    userInfo.lName +
    "', '" +
    userInfo.email +
    "', '" +
    userInfo.pass +
    "')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    console.log("1 record inserted");
  });

  res.send('"DATA RECIEVED"');
});

//Login
app.post("/LoginUser", (req, res) => {
  connection.connect();
  let userInfo = req.body;
  console.log(userInfo);

  let sql =
    "SELECT * FROM SecureLogin.User where Email = '" +
    userInfo.email +
    "' && Pass = '" +
    userInfo.pass +
    "'";

  connection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    let msg = "";
    if (rows.length === 1) {
      msg = "SUCCESS";
    } else {
      msg = "FAILURE";
    }
    res.send({ message: msg });
  });

  //res.send('"DATA RECIEVED"');
});
