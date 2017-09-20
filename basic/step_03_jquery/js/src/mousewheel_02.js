(function($){
  // 최초에 브라우저 위치를 상단으로 이동
  $('html,body').stop().animate({scrollTop:0});
  var body = $('html');
  //-----------------------------------------------------
  // .view 갯수를 파악
  var view = $('.view');
  var viewLength = $('.view').length;
  console.log(viewLength);


  $('html,body').animate({scrollTop:0});

  //각각의 offset().top 위치를 파악
  // 1번째 테스트
  //console.log(v1_top);

  //각각의 내용을 배열로 저장
  //var v1_top = view.eq(0).offset().top;
    var viewList = [];
    var i=0;
    var vTop;
    for(;i<viewLength;i++){
      vTop = view.eq(i).offset().top;
      //console.log(vTop);
      viewList[i]=vTop;

      //viewList.push(view.eq(i).offset().top);
    }
console.log(viewList);

 
  //-----------------------------------------------------
  var wheelnumber=0;
  body.on('mousewheel DOMMouseScroll',function(event){
    // 마우스 휠 기능 만드러서 불러오기(복잡한 계산을 하지 ㅇ낳아도 된다!!!!)
    var mywheel = WheelEvent(event);
    //var d = false;
    //console.log(mywheel);
    //스크롤 움직일 떄 사용된 값에 의해 페이지 이동처리
    //var myscroll = body.scrollTop(viewList[2]);
    wheelnumber -= mywheel;
    //0보다 작아지는 경우
    if(wheelnumber<0){
      wheelnumber = 0;
    }
    //화면에 보여줄 갯수의 숫자보다 클 경우
    else if(wheelnumber >= viewLength){
      wheelnumber = viewLength-1;
    }
        $('html,body').stop().animate({scrollTop:viewList[wheelnumber]});
    
    console.log(wheelnumber);
  });
})(this.jQuery);