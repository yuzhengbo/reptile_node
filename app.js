var http = require('http');
// var fs = require('fs');
// var hostName = 'localhost';
// var port = 3000;
// var express = require('express');
// var app = express();
// // 启动服务
// var server = http.createServer(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('hello nodejs');
// })
// server.listen(port, hostName, function () {
//   console.log(`服务器运行在http://${hostName}:${port}`);
// })
// // 路由
// app.get('/', function (req, res) {
//   res.send('hello word')
// })

var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('hello world');
})
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port);
})

app.get('/reptile', function (req, res) {
  var url = 'http://www.lizhi.fm/';
  function fetchPage (url) {
    startRequest(url)
  };
  function startRequest (url) {
    http.get(url, function (res) {
      console.log(url)
      var html = '';
      var titles = [];
      res.setEncoding('utf-8');
      console.log(res)
    })
  };
  fetchPage(url)
  res.send('成功')
})
