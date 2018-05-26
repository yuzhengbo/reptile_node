var proxy = require('express-http-proxy');
var express = require('express');
var xpath = require('xpath');
var dom = require('xmldom').DOMParser
var cheerio = require('cheerio');
var app = express();
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
})

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
    const $ = cheerio.load(xml);
    let cateDom = $('#allRadioTag a')
    console.log(cateDom[0])
    let category = []
    for (let i=0; i<cateDom.length - 1; i++) {
      let item = {}
      item.name = cateDom[i].firstChild.data
      item.href = cateDom[i].attribs.href
      category.push(item)
    }
    data = category;
    return data
    // var doc = new dom().parseFromString(xml) 
    // var nodes = xpath.select('//*[@id="allRadioTag"]', doc)
    // data = nodes
    // return data.toString();
    // return "node使用xpath爬取html会出现问题"
  }
}))

app.get('/gets', function (req, res) {
  let item = {
    name: 'lht',
    age: 25,
    sex: 1,
    job: '前端工程师'
  }
  res.send(item);
})