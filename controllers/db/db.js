var express = require('express');
var ibmdb = require('ibm_db');


const dbControllers = {
    getInfoFromDatabase : async function (req, res) {
        let numberOfRows = JSON.parse(req.body.numberOfRows) ? JSON.parse(req.body.numberOfRows) : 20;
        connString = process.env.CONECTION_DB_STRING;
        try {
        var option = { connectTimeout : 40, systemNaming : true };// Connection Timeout after 40 seconds.
        var conn = ibmdb.openSync(connString, option);
        conn.query("SELECT h.QRYID, h.INVNO, h.INVDATE, h.INVAGE FROM HSI.HSIMASTINV h FETCH FIRST " + numberOfRows + " ROWS ONLY;", function (err, rows) {
            if (err) {
                console.log(err);
                res.status(400).send({message:err})
            } else {
                let count = 0;
                Object.keys(rows).forEach(function(key) {
                    rows[key].id = "" + count;
                    count++;
                });
                res.status(200).json(rows);
            }
            conn.close();
        });
        } catch (e) {
        console.log(e.message);
        }
    }

}

module.exports = dbControllers

