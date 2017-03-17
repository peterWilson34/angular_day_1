var http= require('http');
var express= require('express');
var app= express();

app.use('/js',express.static(__dirname+'/js'))
app.use('/css',express.static(__dirname+'/css'))
app.use('/fonts',express.static(__dirname+'/fonts'))
app.use('/imgs',express.static(__dirname+'/imgs'))
app.use('/templates',express.static(__dirname+'/templates'))
app.use('/templates',express.static(__dirname+'/templates'))
app.use('/lib',express.static(__dirname+'/lib'))
// app.get('/*',function(req,res) {
//   res.sendFile(__dirname+'/index.html')
// })

app.listen(3000,function(){
  console.log('listening on port 3000');
});
