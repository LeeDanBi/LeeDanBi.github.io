//JSON (javaScript object Notation - 자바스크립트 객체 표현방법)
//과거 sql(db) -- 관계형 db -table형태 : MySql, oracle, msSql, mariaDB ...
//현재 sql(db) -- 빅데이터를 처리하거나, ㅓ좀 더 복잡한 구조를 처리하기 위해 개량 : MongoDB

  // .html(); - 코드가 포함된 html형식의 값을 가져오거나, 담아줄때 사용
  // .val();  - form형식의 값을 가져오거나 입력할때 사용
  // .text(); - 글자를 가져오거나, 글자를 변경
  // .append() | .appendTo()
  // .prepend() | .prependTo()

(function($){
  var db = [
      {'name':'이도형', 'gender':'male'},
      {'name':'전혜빈', 'gender' : 'female'},
      {'name':'김하영', 'gender' : 'female'},
      {'name':'박새나', 'gender' : 'female'},
      {'name':'서보람', 'gender' : 'female'},
      {'name':'이수진', 'gender' : 'female'},
      {'name':'이현준', 'gender' : 'female'},
      {'name':'이단비', 'gender' : 'female'},
      {'name':'이승희', 'gender' : 'female'},
      {'name':'안영란', 'gender' : 'female'}
  ];

  // console.log(db[1].gender, db[0]['name']);

  var headBox = $('#headBox');
  var head_ul = headBox.children('ul');
  var head_li = head_ul.children('li');

  //head_li.eq(0).html('<span>').text(db[0].name);

  var i=0;
  var li_length = head_li.length; // 10

  for(; i<li_length; i++){
    head_li.eq(i).html('<span>');
    head_li.eq(i).find('span').text(db[i].name);
  }

  //네이버, 다음, 구글, w3schools, darum.daum, nuli.navercorp

  var db2 = [
      {'link' : 'https://naver.com/',         'site' : '네이버'},
      {'link' : 'https://www.daum.net/',      'site' : '다음'},
      {'link' : 'https://www.google.co.kr/',  'site' : '구글'},
      {'link' : 'https://www.w3schools.com/', 'site' : 'w3schools'},
      {'link' : 'http://darum.daum.net/',     'site' : 'darum.daum'},
      {'link' : 'http://nuli.navercorp.com/', 'site' : 'nuli.navercorp'}
  ];

  //$('body').append('<div id="webPage">');
  // 위 내용은 script코드 뒤에 작성되는 문제가 있다.
  //내부가 아닌 형제에서 이전 또는 이후
  // before() | after()
  $('body').find('script').before('<div id="webPage">');
  var webPage = $('#webPage');
  webPage.html('<ul>');
  var web_ul = webPage.find('ul');

  //web_ul.append('<li>');

var i=0;
var li_eq;
  for(;i<db2.length;i++){
    web_ul.append('<li><a>');

    li_eq = web_ul.find('li').eq(i).find('a');

    li_eq.attr('href',db2[i].link);
    li_eq.text(db2[i].site);
  }


  $('body').find('script').before('<div id="carImg">');
  var carImg = $('#carImg');
  carImg.html('<ul>');
  var car_ul = carImg.children('ul');

  var carDb = [
    {'name' : '벤츠', 'link' : 'http://mblogthumb2.phinf.naver.net/MjAxNzAyMjZfNzIg/MDAxNDg4MDg3MjEzMTgx.HycxqzlR7V6KRH4iEhb6fYSJaKkgAfZsAQhmyh8mmA4g.b57ywLt8GZmQ1AEFg1x8UXzk0YA5thVL8RKsMstzOcAg.PNG.kingmatrix/sclass.png?type=w800'},
    {'name' : '폭스바겐', 'link' : 'http://i1.daumcdn.net/thumb/R448x0/?fname=http://i1.daumcdn.net/cfile181/image/2471323ED54B482E1B3353'},
    {'name' : '쉐보레', 'link' : 'http://i2.daumcdn.net/thumb/R448x0/?fname=http://i2.daumcdn.net/cfile90/image/263C7A3E97991E6AA98A5F'},
    {'name' : '아우디', 'link' : 'http://cloudlakes.com/data_images/models/audi-a4-quattro/audi-a4-quattro-06.jpg'},
    {'name' : '쿠버', 'link' : 'http://blog.donga.com/lake1379/files/2014/12/cooberpedy3.jpg'}
  ];

  i=0;
  var myImg, myAlt, liImg;

    for(;i<carDb.length;i++){
      car_ul.append('<li><img>');
      myImg = carDb[i].link;
      myAlt = carDb[i].name;
      liImg = car_ul.find('li').eq(i).find('img');

      liImg.attr({'src':myImg, 'alt':myAlt});
      //('src',myImg).attr('alt',myAlt);
    }

  car_ul.find('img').css({width:'300px', height:'300px'});


  carImg.after('<div id="coffeeBox">');
  var coffeeBox = $('#coffeeBox');
  coffeeBox.html('<ul>');
  var coffee_ul = coffeeBox.children('ul');

  var url = "../img/";

  var coffee_01 = [

    [ 
      {'img': {'src': 'tropical.jpg', 'alt': 'Tropical Passion'}},
      {'menu' : {'title': {'en' : 'Tropical Passion', 'ko': '트로피칼 패숀'}, 'content': '메리골드 꽃과 당아욱(Malva)으로 맛을 내며 중국 홍차, 패션 후루트, 구아바의 조화로 만들어 집니다.'}}
    ], //제품1

    [ 
      {'img': {'src': 'apricot.jpg', 'alt': 'Apricot Ceylon'}},
      {'menu' : {'title': {'en' : 'Apricot Ceylon', 'ko': '살구실론'}, 'content': '실론차에 살구 맛과 메리골드 꽃잎이 블렌드되어 우아한 향을 냅니다.'}}
    ], 

    [ 
      {'img': {'src': 'pomegranate.jpg', 'alt': 'Pomegranate Blueberry'}},
      {'menu' : {'title': {'en' : 'Pomegranate Blueberry', 'ko': '파미그래네이트 블루베리'}, 'content': '블루베리와 석류 맛이 가향된 녹차, 우롱차, 홍차의 혼합. 우유와 잘 어울립니다.'}}
    ] 

  ];

  i = 0;

  var coffee_li, coffee_img,coffee_dt, coffee_dd; 
// console.log(coffee_01[0][0].img.src );

  for(;i<coffee_01.length;i++){
    coffee_ul.append('<li><img>');
    coffee_li = coffee_ul.children('li').eq(i);
    coffee_img = coffee_li.children('img');
    coffee_img.attr({'src': url + coffee_01[i][0].img.src , 'alt': coffee_01[i][0].img.alt});
    coffee_li.append('<dl><dt></dt><dd></dd></dl>');
    coffee_dt = coffee_li.find('dt');
    coffee_dd = coffee_li.find('dd');
    coffee_dt.html(coffee_01[i][1].menu.title.en + '<br />' + coffee_01[i][1].menu.title.ko);
    coffee_dd.text(coffee_01[i][1].menu.content);
  }

})(this.jQuery);