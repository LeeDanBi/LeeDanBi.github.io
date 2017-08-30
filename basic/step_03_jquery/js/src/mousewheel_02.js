(function($){
  var body = $('html, body');
  //-----------------------------------------------------
  // .view 갯수를 파악
  var view = $('.view');
  var viewLength = $('.view').length;
  console.log(viewLength);

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
  body.on('mousewheel DOMMouseScroll',function(event){
    // 마우스 휠 기능 만드러서 불러오기(복잡한 계산을 하지 ㅇ낳아도 된다!!!!)
    var mywheel = WheelEvent(event);
    //console.log(mywheel);
  });
})(this.jQuery);