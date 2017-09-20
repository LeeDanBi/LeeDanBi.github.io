(function($){
  //page-x, page-y
  //pageX, pageY
  //.on('mousemove')
  //$(document)라고 써도 됨
  $('#wrap').on('mousemove',function(e){
    // 마우스 좌표값
    var pagex = e.pageX;
    var pagey = e.pageY;
    var winW = $(window).innerWidth();
    var winH = $(window).innerHeight();

    // $('.x').children('span').text(pagex);
    // $('.y').children('span').text(pagey);

    // 사용하려는 좌표는 모니터의 크기에 따라 달라지게 된다.
    // 모두 동일한 환경으로 세팅
    // 0 ~ 100
    // 마우스 좌표 / 내가 가진 브라우저 화면의 가로값 * 100
    // 사용할 크기 / 기준크기 * 100 -> vw, vh계산 가능
    var myX = pagex/winW *100;
    var myY = pagey/winH *100;
    var percentX = parseInt(myX);
    var percentY = parseInt(myY);

    // parseInt() => 정수로 변환
    // Math.random() => 0~1까지 랜덤 숫자
    // Math.ceil() => 올림
    // Math.round() => 반올림
    // ......

    //변경된 수치값 체크
    $('.x').children('span').text(percentX);
    $('.y').children('span').text(percentY);

    $('.my_box').css({transform:'translate('+ -percentX + 'px, '+ -percentY + 'px)'});
  });
})(this.jQuery);