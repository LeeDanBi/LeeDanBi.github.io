(function($){
var bannerUl = $('#bannerWrap');
var banner_li = bannerUl.children()
var clone_li = banner_li.last().clone();

var indicatorBox = $('.indicator');
var indicator_li = indicatorBox.children();
var clone_indi = indicator_li.last().clone();

var btn_indi = indicatorBox.children('li');
var btnLeft = $('.btn_l');
var btnRight = $('.btn_r');

var i = 1;

bannerUl.prepend(clone_li);
banner_li = bannerUl.children();
var banner_i = banner_li.length;

indicatorBox.prepend(clone_indi);
indicatorBox = $('.indicator');
indicator_li = indicatorBox.children();
indicator_li.first().hide(); //---------------------------

bannerUl.css({width:banner_i*100+'%', marginLeft: -100+'%'});
banner_li.css({width: 100/banner_i+'%'});


function MoveUl(e){
  e.preventDefault();
  var _this = $(this);
  i = _this.index();
  bannerUl.stop().animate({marginLeft: -(100*i)+'%'});
  indicator_li.eq(i).css({backgroundColor:'#ff0066'}).siblings().css({backgroundColor:'#ffb3d1'});
  // console.log(i);
};

btn_indi.on('click',MoveUl); // indicate 클릭

btnLeft.on('click',MoveUl_l);

// console.log(i);

 indicator_li.eq(i).css({backgroundColor:'#ff0066'}).siblings().css({backgroundColor:'#ffb3d1'});

function MoveUl_l(){
  i -= 1 ;
  if(i<=0){
    
    bannerUl.stop().animate({marginLeft: -(100*i)+'%'},function() {
  console.log(i);
    // i = banner_i-1;
    bannerUl.css({marginLeft: -(100*i)+'%'});
    });
    i = banner_i-1;
    // console.log(i);
    indicator_li.eq(i).css({backgroundColor:'#ff0066'}).siblings().css({backgroundColor:'#ffb3d1'});
   }else{
     bannerUl.stop().animate({marginLeft: -(100*i)+'%'});
     indicator_li.eq(i).css({backgroundColor:'#ff0066'}).siblings().css({backgroundColor:'#ffb3d1'});
  }
};
btnRight.on('click',MoveUl_r);


function MoveUl_r(){
  i += 1;
  indicator_li.eq(i).css({backgroundColor:'#ff0066'}).siblings().css({backgroundColor:'#ffb3d1'});
  if(i>=banner_i-1){
    i=banner_i-1;
    bannerUl.stop().animate({marginLeft: -(100*i)+'%'},function() {
    i = 0;
    bannerUl.css({marginLeft: -(100*i)+'%'});
    });
  }else{
    bannerUl.stop().animate({marginLeft: -(100*i)+'%'});
  }
  console.log(i);
};


})(this.jQuery);