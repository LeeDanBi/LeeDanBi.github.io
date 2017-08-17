(function(){
 
  var addH = $('.add_h');
  var addDt = addH.find('dt');
  var addDd = addH.find('dd');

  var arr = [];
  var i = 0;
  for(; i<addDd.length; i++){
    arr[i] = addDd.eq(i).height();
    }


  $('.add_h').find('dd').hide();

  $('dt').on('click',function(e){

    e.preventDefault();

    var _$this = $(this);
    var nextDd = _$this.next('dd');
    var ddBro = nextDd.siblings('dd');

    var formAni = function(evt){

    evt.stop().animate({height:0, padding:0}, function(){
          evt.css({display:'none'});
      });
    };// formAni


    var formView = function(evt){
    var j = addDt.index(_$this);
    console.log(j);
    evt.css({display:'block', padding:0, height:0, overflow:'hidden'})
       .stop().animate({height:arr[j], padding: '0.5em'});
    }; // formView

    formAni(ddBro);

    var ddDp = nextDd.css('display');
    (ddDp == 'none') ? formView(nextDd) : formAni(nextDd);

  });

})(this.jQuery);


 /* jquery 아코디언
   * 1. 선택 개체 숨기기 (hide())

   * 2. 선택되지 않은 다른 개체 사라지게 만들기
   *   2-1. 현재값에서 높이가 0이 되도록 animate
   *   2-2. 0으로 만들어지면 hide()

   * 3. 선택개체 바로 뒤 요소 보이게 만들기
   *   3-1. show() -> height:0
   *   3-2. 원래 가져야하는 높이 값으로 설정
   */
