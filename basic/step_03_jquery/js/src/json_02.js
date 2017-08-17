(function(){

var product = [
  {'car' : ['audi', 'jaguar', '롤스로이스', '폭스바겐', '현다이']},
  {'pen' : ['모나미', '지브라', '라미', '몽블랑']},
  {'coffee' : ['자바', '비엔나', '스타벅스', '자바시티', '던킨'], 
   'juice' : ['ade', 'smoodi', 'fruit']}
];

console.log(product[2]);
console.log(product[2].coffee);
console.log(product[2].coffee.length);
console.log(product[2].juice[0]);

})(this.jQuery);