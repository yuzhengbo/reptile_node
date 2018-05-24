var proxy = require('express-http-proxy');
var express = require('express');
var xpath = require('xpath');
var parse5 = require('parse5');
var xmlser = require('xmlserializer');
var dom = require('xmldom').DOMParser
var app = express();
app.get('/', function (req, res) {
  res.send('hello world');
})
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port);
})

var url = 'http://www.lizhi.fm/';
app.use('/proxy', proxy(url, {
  userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
    xml = proxyResData.toString('utf8');
    var doc = new dom().parseFromString(xml) 
    var nodes = xpath.select('//*[@id="allRadioTag"]', doc)
    data = nodes
    return data.toString();
    // return "node使用xpath爬取html会出现问题"
  }
}))
