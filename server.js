var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/', function(req, res){

 // console.log("its coming here");
  // url = 'https://www.smashingmagazine.com/2015/04/web-scraping-with-nodejs/';
  // url ="https://apply.king.com/vacancy/find/results/"
  url = "http://www.cwi.com.br/Oportunidades"
    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html

    request(url, function(error, response, html){
      if(!error){
        var $ = cheerio.load(html);
        var refcode, description, location;
        var title = [];
        var json = { refcode : "", title : "", description : "", location : ""};
    
        // console.log(json);


        // console.log("******************");
        // console.log($.html);

        // console.log($('h5.job-header'));



      $('h5.job-header').filter(function(){
          console.log("its coming here")
          var data = $(this);
          // console.log($(this));
          // console.log(data);
          // title = data.children().first().text();
          title.push(data.text());
          json.title = title;

          
          // $("h5.job-header").click(function(){
          //   $.post('/test')
          // // })
          // $("h5.job-header").forEach(function(item){
          //   console.log("coming here")
          //   item.click
          // })
            // .click($(this).text());
        // console.log(title);
          // response.write(title);
          // res.send(json.title)
        })

        // links=$('h5.job-header');

        // // console.log(links)
        // console.log("***************************************")
        // links.each(function(i,link){
        //   url = $(link).children().first().text();
        //   console.log(url);
        //   datapage=link.click();
        //   console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
        //   console.log(datapage);
        // })
     
        res.send(json.title)

       // console.log(error)
      }

      console.log("********")
      // console.log(title)

      //res.end();
       // res.send(json.title)
    })

})
app.post('/test', function (req, res) {
    console.log('works');
});

app.listen('8081')

console.log('Magic happens on port http://127.0.0.1:8081/');

exports = module.exports = app;
