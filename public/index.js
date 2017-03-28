var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 8000);

app.use("/css", express.static("css"));
app.use("/img", express.static("img"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Listen for requests
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('port ' + port + ' Runnning on http://localhost:8000');
});