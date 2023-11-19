const mysql = require("mysql");

const database = (db_name) => {
    const conn = mysql.createConnection({
        host: "bwjrecswsp8qx3wy3cg6-mysql.services.clever-cloud.com",
        port: 3306,
        user: "ud1kdsouwccemttl",
        password: "iEHsBVGLeQQRiB0pIv0l",
        database: db_name,
    });
    // const conn = mysql.createConnection({
    //     host: "byrnbofcdwa2cgouqo28-mysql.services.clever-cloud.com",
    //     port: 3306,
    //     user: "uwzawygqrxvsugwb",
    //     password: "Oc6F1O8u1yDdRaomGMeZ",
    //     database: db_name,
    // });

    conn.connect((err) => {
        if (err) console.log(err);
        console.log(db_name + " database Connected!");
    });

    return conn;
};

module.exports = database;