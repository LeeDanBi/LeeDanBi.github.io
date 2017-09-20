(function(){
  // 1. slide indicator를 통해 배너가 움직이도록 처리
  // 2. 좌, 우 버튼을 클릭해서 배너가 움직이도록 처리
  // 3. 좌, 우 버튼을 클릭시 indicator도 같이 처리

// 1번 기능 - 좌,우 버튼 임시로 숨김
  //$('.slide_btn').hide();

  // indicator클릭시 해당하는 값이 이동
  var indi = $('.indicator');
  var indi_li = indi.children('li');
  var banner = $('#bannerBox');
  var banner_child = banner.children();
  var banner_i = banner_child.length;
  var btnR = $('.r_btn');
  var btnL = $('.l_btn');
  var i = 0;
  //변수값보다 함수호출이 먼저 되면 undefined 또는 에러를 도출
  // 좌, 우 버튼 클릭시 일정 위치에서 사라지거나, 나타나게 만드는 기능을 함수화 처리
  function Ifbtn(i){
    if(i <= 0){
      i=0;
      btnL.fadeOut();
      btnR.fadeIn();
    }else if(i >= banner_i-1){
      i=banner_i-1;
      btnR.fadeOut();
      btnL.fadeIn();
    }else{
      btnL.fadeIn();
      btnR.fadeIn();
    } 
    banner.animate({marginLeft: -i*100 +'%'});
    indi_li.eq(i).addClass('active').siblings().removeClass('active');
  };

  Ifbtn(i);

  indi_li.on('click',['button'],function(e){
    e.preventDefault();
    var _this = $(this);
    Ifbtn( _this.index() );

  }); 

// 2번 기능 - 좌우 기능을 위해 indicator임시로 숨김
  //indi.hide();


  btnR.on('click',function(){
    Ifbtn(++i);
  });
  btnL.on('click',function(){
    Ifbtn(--i);
  });

  
})(this.jQuery);