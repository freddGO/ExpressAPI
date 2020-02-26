var express = require('express');
var router = express.Router();
var ibmdb = require('ibm_db');

router.get('/', function(req, res, next) {
    var connString = "DATABASE=INNOLABD;HOSTNAME=169.55.58.245;PORT=50001;PROTOCOL=TCPIP;UID=qfind;PWD=good4you;Security=SSL;SSLServerCertificate=/etc/ssl/certs/app/db2.ssl.file;";
    try {
      var option = { connectTimeout : 40, systemNaming : true };// Connection Timeout after 40 seconds.
      var conn = ibmdb.openSync(connString, option);
      conn.query("select * from customers fetch first 10 rows only", function (err, rows) {
		if (err) {
			console.log(err);
		} else {
		  console.log(rows);
		}
		conn.close();
      });
    } catch (e) {
      console.log(e.message);
    }
});

module.exports = router;