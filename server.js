const express = require('express');
const port = process.env.port || process.env.port || 5000;

const app = express();


//add the college information here in the same format
var collegesInformations = [ 
    {"id":1,"name":"collegeName", "location":"collegeLocation", "contact":"collegeContact"}, 
    {"id":2,"name":"collegeName", "location":"collegeLocation2", "contact":"collegeContact2"}, 
    {"id":3,"name":"collegeName", "location":"collegeLocation3", "contact":"collegeContact3"}, 
 ];

app.get('/collegeinfo', (req,res)=> {
    res.status(200).send(collegesInformations);
})

app.listen(port, ()=>{
    console.log('running!');
});