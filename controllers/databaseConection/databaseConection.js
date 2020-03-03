let ibmdb = require('ibm_db');

class databaseConection {

    constructor(){
        this.option = { connectTimeout : 40, systemNaming : true };// Connection Timeout after 40 seconds.
        this.connString = process.env.CONECTION_DB_STRING;
        //this.conn = ibmdb.openSync(connString, option);
    }


    prepareAndMakeQuery(query, variables){
        ibmdb.open(this.connString,function(err,conn){
            conn.prepare(query, function (err, stmt) {
              if (err) {
                console.log(err);
                return conn.closeSync();
              }
          
              stmt.execute(variables, function (err, result) {
                if( err ) console.log(err);
                else {
                    let data = result.fetchAllSync();
                    console.log(data);
                    result.closeSync();
                }
          
                //Close the connection
                conn.close(function(err){});
              });
            });
          });
    }

}



module.exports =  databaseConection