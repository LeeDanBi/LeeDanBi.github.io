(function($){
  //스크롤 이벤트 사용

  //landing_02
  // #content_02 상단에서 떨어진 위치 파악
  var conOffset = $('#content_02').offset().top;


  // console.log($('body').css('paddingTop'));
  // console.log($('#headBox').css({}));
  $(window).on('scroll',function(){
    //offset().top 500만큼 이동하면,
    //headBox의 높이와, 배경색상을 변경처리
    // 그림자를 생성
    var _this = $(this);
    var windowOffset = _this.scrollTop();
    var timed = 500;
    console.log(windowOffset);
    if( windowOffset >= 80){
      $('body').addClass('scroll',{duration:timed});
      $('#headBox').addClass('scroll',{duration:timed});
      $('#headBox').children().addClass('scroll',{duration:timed});
    }else{
      $('body').removeClass('scroll',{duration:timed});
      $('#headBox').removeClass('scroll',{duration:timed});
      $('#headBox').children().removeClass('scroll',{duration:timed});
    }
//content_02내부의 이미지 나타나게 만들기
      var one = $('.one');
      var two = $('.two');
    if(windowOffset>=(conOffset-500)){
      one.addClass('addView');
      two.addClass('addView');
    }else{
      one.removeClass('addView');
      two.removeClass('addView');
    }
  });
})(this.jQuery);

// 우리가 주로 사용하는 영역은 document
// document 내부에서 기능을 사용하는 것들은 모두 요소(태그, 속성, ...)을 사용하여 처리하는 기능 - DOM
// window는 document보다 더 큰 범위의 영역 - window는 브라우저 자체 - BOM