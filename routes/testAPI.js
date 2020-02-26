var express = require('express');
var router = express.Router();
var ibmdb = require('ibm_db');

router.get('/', function(req, res, next) {
    //var connString = "DATABASE=INNOLABD;HOSTNAME=169.55.58.245;PORT=50001;PROTOCOL=TCPIP;UID=qfind;PWD=good4you;Security=SSL;SSLServerCertificate=/etc/ssl/certs/app/db2.ssl.file;";
    connString = "DATABASE=SBYSA13;HOSTNAME=sbysa13.rochny.ibm.com;PORT=446;PROTOCOL=TCPIP;UID=cvrbind1;PWD=HOT1DOG;";
    /*
    "DB": <SBYSA13>,
    "HOSTNAME": <sbysa13.rochny.ibm.com>,
    "PORT": <446>, — just in case it is not ssl
    "USERNAME": <cvrbind1>,
    "PASSWORD": <HOT1DOG>,
    "ARM": <fileName.arm>,
    "SSLPORT": <446></fileName.arm>
    */
    try {
      var option = { connectTimeout : 40, systemNaming : true };// Connection Timeout after 40 seconds.
      var conn = ibmdb.openSync(connString, option);
      conn.query("SELECT h.ACTIVITYCD FROM HSI.HSIABNOCLO h FETCH FIRST 20 ROWS ONLY;", function (err, rows) {
		if (err) {
      console.log(err);
      res.json(rows);
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