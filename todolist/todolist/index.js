var express = require('express')
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname,'dist')));
app.listen(8210,function(){
	console.log("port is 8210")
})

