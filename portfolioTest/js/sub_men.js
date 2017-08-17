(function($){

  
  var tabMenu = $('.tab_menu').children('li');
  var plBanner = $('.planning_banner');

  var MenuTimerID = setInterval(MenuTimer, 5000);

   var retime=-2540;

  function MenuTimer(){
  
    retime -= 1020;
    plBanner.stop().animate({'marginLeft': retime +'px'},500);

  } 

  tabMenu.on('click',function(e){
    e.preventDefault();
    var btnIndex = $(this).index();
    var plBanner = $('.planning_banner');
  // console.log(btnIndex);
    var moveList;
    switch(btnIndex){
      case 0:
        moveList = '-500px';
        break;
      case 1:
        moveList = '-1520px';
        break;
      case 2:
        moveList = '-2540px';
        break;
      case 3:
        moveList = "-3560px";
        break;
      case 4:
        moveList = "-4580px";
        break;
    } 
   plBanner.stop().animate({'marginLeft': moveList},500);

   $(this).siblings().css({backgroundColor: '#333'});
   $(this).css({backgroundColor: '#f00'});
  });


  var menuBtn = $('#goodsMenu').find('button'); 
  var menuCon = $('.menu_content');
//  var mcRotate = document.querySelectorAll('#goodsMenu i').style.transform;
  menuBtn.on('click',function(e){
    e.preventDefault();
    var _$this = $(this);
    var menuConDispaly = _$this.next().css('display');

    _$this.next().stop().slideToggle();


      var icon = _$this.find('i');
      var next = _$this.next();
      var timed = 500;
    if(menuConDispaly=='none'){
      icon.removeClass('test2');
      icon.addClass('test');
      
      // next.css({display:'block'});
      // next.animate({height:0}, function(){
      //   next.animate({height:'40px'},timed);
      // });

    }else{
      icon.removeClass('test');
      icon.addClass('test2');

     //   next.animate({height:0},function(){
     //     next.hide();
     // });
    }

  });
})(this.jQuery);

          function UpperCasy(keyword){

          // var keyword = keyword;
          var keyword1 = document.querySelector(keyword).innerText;
          var upperkey = keyword1.toUpperCase();

          var text = upperkey;
          return keyword1.replace(keyword1,text);
          }

          document.querySelector('h3').innerText.toUpperCase();
          // UpperCasy('h3'); //대문자로 바꾸기

          (function($){

            // var text = $('h3').text().replacy().toUpperCase();
            // $('h3').text(text);

            var goodML = $('#goodsMenu>ul>li');
            var goodMLL = $('#goodsMenu>ul>li').length;

            for(var i=0;i<goodMLL;i++){
            var goodU = $('#goodsMenu>ul>li').eq(i)
                          .find('.menu_content');
            var goodL = goodU.find('li');
            var goodL0 = goodL.eq(0);
            var goodLIn = goodL.length; //각 li마다그 안에 #goodsMenu안의 li갯수를 파악
            var arr = [];
             // console.log(goodLIn);

             if(goodLIn <= 2){
                goodL0.css({marginLeft:'240px'})
             }else if(goodLIn == 3 ){
                goodL.eq(1).css({marginLeft : '220px'})
             }else if(goodLIn > 4){
                goodU.css({height:'900px'})
                if(goodLIn == 5){
                  goodL.eq(3).css({marginLeft : '240px'});
                }
             }
            }//for
          })(this.jQuery);