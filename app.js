var express = require('express')

// app setup
app = express();


//port setup
var server = app.listen(3000,function(){
    console.log('now listening @ port 3000.')
})

//static files
app.use(express.static('public'));

