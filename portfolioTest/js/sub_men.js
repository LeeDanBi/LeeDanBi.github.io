(function($){

  
  var tabMenu = $('.tab_menu').children('li');

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