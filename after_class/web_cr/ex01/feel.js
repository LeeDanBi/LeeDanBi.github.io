var client = require('cheerio-httpcli');
client.fetch("http://www.feelway.com/index.php", {}, function (err, $, res, body) {
  var list = $(".list_area .col_selected li");
  list.each(function(){
    console.log($(this).find(".title").text());
  });
});