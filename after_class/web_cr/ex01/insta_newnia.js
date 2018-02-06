var client = require('cheerio-httpcli');

client.fetch("https://www.instagram.com/newnia_official/", {}, function(err,$,res,body){
	var bodym = $('body');
	console.log(bodym.html());
});