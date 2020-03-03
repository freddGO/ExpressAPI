var express = require('express');
var databaseConection = require('../databaseConection/databaseConection')


const dbControllers = {
    getInfoFromDatabase : async function (req, res) {
        try {
            let numberOfRows = JSON.parse(req.body.numberOfRows) ? JSON.parse(req.body.numberOfRows) : 20;
            let query = "SELECT h.QRYID, h.INVNO, h.INVDATE, h.INVAGE FROM HSI.HSIMASTINV h FETCH FIRST ? ROWS ONLY;"
            let database = new databaseConection();
            result = await database.prepareAndMakeQuery(query, [numberOfRows]);
            console.log('result', result);
            res.status(200).json(result)
        } catch (e) {
        console.log(e.message);
        }
    }

}

module.exports = dbControllers

