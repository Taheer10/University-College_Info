var express = require('express'); // require the express framework
var app = express();
var fs = require('fs'); //require file system object
const port = process.env.port || process.env.port || 5000;

// Endpoint to Get a list of collegesInformation
app.get('/collegeinfo', function(req, res){
    fs.readFile(__dirname + "/" + "colleges.json", 'utf8', function(err, data){
        // console.log(data);
        res.end(data); // you can also use res.send()
    });
})

// Create a server to listen at port 8080
var server = app.listen(port, function(){
    var host = server.address().address
    var port = server.address().port
    console.log(`Listening to port ${port}`);
})