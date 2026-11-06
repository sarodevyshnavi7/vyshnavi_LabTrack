
const mysql = require("mysql8");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "labtrack"
});

con.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err.message);
        return;
    }

    console.log("Connected to MySQL successfully!");
});

module.exports = con;
