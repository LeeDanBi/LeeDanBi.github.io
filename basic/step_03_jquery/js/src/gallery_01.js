(function($){

  var galleryBox  = $('.gallery_box');
  var galleryList = $('.gallery_list');
  var gallery_li  = galleryList.children('li');
  var timed       = 500;

// 변수이름을 설정할 때 미리 방법을 정의해놓는 것이 좋다 .!  ! ! ! !! *1,000,000
  // carmel  > 최초의 선택자를 선정하는 경우에
  // snake   > 다른 변수의 하위 또는 다른 변수와의 조합으로 만들어진 변수
  // pascal  > 함수의 이름을 사용할때 변수로 할당된 함수
  // $       > 함수의 이름을 사용할때 함수 자체의 이름
  // _       > 함수 내부의 히든처리되는 변수(지역변수, 임시변수)

  // gallery_li 클릭

gallery_li.on('click',function(e){
  e.preventDefault();

  var _this = $(this);
  var _mySrc = _this.attr('data-src'),
      _myAlt = _this.attr('data_alt');


  galleryBox.find('img').attr({'src': _mySrc, 'alt': _myAlt});
  


});


})(this.jQuery);