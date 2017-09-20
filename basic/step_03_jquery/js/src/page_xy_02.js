(function($){
  // window width을 확인
  // 마우스 이동
  // 이동시, x, y값 파악
  // 좌표값을 일정한 크기로 제한(100값으로 제한)
  // 이미지태그를 생성한 후
  // 해당값을 이미지의 파일명과 함쳐서 처리

    var winW = $(window).innerWidth();
  $('.my_img').on('mousemove',function(e){
    var _thisW = $(this).offset().left;
    var pagex = e.pageX - _thisW;
    var imgWidth = $(this).width();
    // var pagey = pageY;
    var myPosition = pagex / imgWidth * 100;
    var myPageX = parseInt(myPosition);
    //크기값 변경내용 검증
      //console.log(myPageX);
    $('.my_img').html('<img>');
    var useImg = $('.my_img').find('img');
    //속성 메소드 .attr();
    var url = '../img/page_xy/';
    // useImg.attr({src:'../img/page_xy/pageImg_10.jpg'});
    useImg.attr({src: url+'pageImg' + myPageX + '.jpg', alt:'page x,y값을 사용한 이미지테스트'});

    //p에 해당하는 이미지 사용설명 처리 
    $('p').find('span').text(url+'pageImg_'+myPageX+'.jpg');
  });
})(this.jQuery);