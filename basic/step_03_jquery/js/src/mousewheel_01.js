(function($){
  var para = $('p');
  //para.text('test');
  var body = $('html,body');
  var delta;

  body.on('mousewheel DOMMouseScroll', WheelEvent);

  function WheelEvent(event){
    para.text('마우스 휠 반응');
    var E = event.originalEvent;
    var delta = 0;
    // console.log(e.originalEvent.wheelDeltaY);
    //firefox event test
    //console.log(E);


    (E.detail)? (delta = E.detail * -40) : (delta = E.wheelDeltaY);

    //각 os별 수치갑싱 다르기 때문에 동일한 수치로 조정
    (delta<=0) ? (delta = -1) : (delta= 1);
    //console.log(delta);
    switch(delta){
      case -1 :
        $('body').addClass('down').removeClass('up');
      break;
      case 1 :
        $('body').addClass('up').removeClass('down');
      break;
    }
    console.log(delta);
    return delta;
  };


})(this.jQuery);