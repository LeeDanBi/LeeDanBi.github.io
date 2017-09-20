(function(){
  // 1. slide indicator를 통해 배너가 움직이도록 처리
  // 2. 좌, 우 버튼을 클릭해서 배너가 움직이도록 처리
  // 3. 좌, 우 버튼을 클릭시 indicator도 같이 처리
  // 4. 좌, 우 버튼을 클릭시 계속 회전하도록 처리
  // 5. 일정 시간마다(약 5초) 내용이 변경(회전)되도록 처리
  // 6. 마우스 올렸을 경우(mouseenter) 자동 변경기능이 멈추고, 벗어날 경우(mouseleave) 다시 변경되도록 처리

  var indi = $('.indicator');
  var indi_li = indi.children('li');
  var banner = $('#bannerBox');
  var banner_child = banner.children();
  var banner_i = banner_child.length; //복제하기 전의 갯수를 파악
  //console.log(banner_i);
  var btnR = $('.r_btn');
  var btnL = $('.l_btn');
  var i = 1;

    // 4번 기능 처리
  // 마지막 요소를 복제

  var clone_banner = banner_child.last().clone();
  // banner.prepend(clone_banner);
  clone_banner.prependTo(banner);
  banner_child = banner.children();
  banner_i = banner_child.length; //복제 후 갯수를 재확인
  //console.log(banner_i);
  // banner의 크기를 복제한 갯수 * 100% 만큼 수정
  banner.css({width:banner_i*100 + '%'});
  // banner의 자식요소 또한 전체크기 / 갯수 % 만큼으로 수정
  banner_child.css({width: 100 / banner_i + '%'});
  // banner 갯수와 동일하게 indicator 처리
  var slideBanner = $('#slideBanner');
  slideBanner.append('<ol class="indicator"></ol>');
  var indi = $('.indicator');
  // .indicater내부에 li값 및 button생성
  var j =0;
  for(; j<banner_i; j++){
    //배너 내부의 li에 존재하는 속성 title의 값 가져오기
    var banner_t = banner_child.eq(j).attr('title');
    indi.append('<li class=\"indi_0'+ (j+1) +
              '\"><button><span class="hidden">'+ banner_t +
              '</span></button></li>');
  }

  var indi_width = indi.width();
  indi.css({marginLeft: -indi_width/2});
  var indi_li = indi.children();

  Ifbtn(i);

  function Ifbtn(i){
    var i = i;
    if(i <= 0){
      i=0;
      banner.stop().animate({marginLeft: -i*100 +'%'},function(){
      banner.css({marginLeft: -(banner_i-1)*100 +'%'});
      });

      i=(banner_i-1);
      indi_li.eq(i).addClass('active').siblings().removeClass('active');
      //console.log(i);
    }else if(i >= banner_i-1){
      i=(banner_i-1);
      banner.stop().animate({marginLeft: -i*100 +'%'},function(){
        banner.css({marginLeft: 0 +'%'});
      });
      i=0;
      indi_li.eq(i).addClass('active').siblings().removeClass('active');
      //console.log(i);
    }else{
      banner.stop().animate({marginLeft: -i*100 +'%'});
      //console.log(i);
      indi_li.eq(i).addClass('active').siblings().removeClass('active');
    }
  };
  

  // ---------------------------------------------


  


  // ---------------------------------------------

// ---------indicator 클릭--------------------
  indi_li.on('click',['button'],function(e){
    e.preventDefault();
    var _this = $(this);
    Ifbtn( _this.index() );
  }); 

  btnR.on('click',function(){
    i += 1;
    if(i >= banner_i){
      i= 1;
      banner.css({marginLeft: 0 +'%'});
      banner.stop().animate({marginLeft: -i*100 +'%'});
      indi_li.eq(i).addClass('active').siblings().removeClass('active');
      //console.log(i);
    }else{
      banner.stop().animate({marginLeft: -i*100 +'%'});
      //console.log(i);
      indi_li.eq(i).addClass('active').siblings().removeClass('active');
    }
  });
  btnL.on('click',function(){
    i -= 1;
    if(i <= 0){
      i=0;
      banner.stop().animate({marginLeft: -i*100 +'%'},function(){
        console.log(i);
      banner.css({marginLeft: -i*100 +'%'});
      });
      i=(banner_i-1);
      indi_li.eq(i).addClass('active').siblings().removeClass('active');
    }else{
      banner.stop().animate({marginLeft: -i*100 +'%'});
      indi_li.eq(i).addClass('active').siblings().removeClass('active');
    }
  });

  //최종 indicator
  indi_li.eq(0).hide();
  slideBanner.css({overflow:'hidden'});
})(this.jQuery);