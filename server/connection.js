const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Youpi590safa",
    database: "jobs_data",

});

mysqlConnection.connect((err)=>{
    if(!err)
    {
        console.log("Connected on Port 3001");

    }
    else
    {
        console.log(err);

    }

});

module.exports = mysqlConnection;