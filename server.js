/**
 * Created by blagrone on 7/26/14.
 */


var express = require('express')
//, cors = require('cors')
    , app = express();
//var app = express();

//var cors = require('cors');
//app.use(cors());
app.use(app.router);
app.use("/", express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded());


app.get('/hello.txt', function (req, res) {
    res.send('patient referral form');
});

var server = app.listen(3000, function () {
    console.log('listening on port %d', server.address().port);
});

