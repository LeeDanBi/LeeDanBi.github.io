(function($){

  var confirmAll = $('#confirmAll');
  // var confirm1 = $('#confirm1');
  // var confirm2 = $('#confirm2');
  
  confirmAll.on('click',function(){
    var confirm = $('input[type="checkbox"]');
    var con_state = confirmAll.attr('checked');
    console.log(con_state);
    if(!con_state == true){
      confirm.each(function(){
        $(this).attr('checked',true);
      });
      $('label').each(function(){
        $(this).addClass('moreIcon');
      });
    }
    else{
      confirm.each(function(){
        $(this).attr('checked',false);
      });
      $('label').each(function(){
        $(this).removeClass('moreIcon');
      });
    }
  });

  var conrim2 = $('.confirm_c'); //이름 클래스 하나로 바꾸기
  conrim2.on('click',function(){
    var _this = $(this);
    var thisId = _this.attr('id');
    var _this_state = _this.attr('checked');
    var labelCheck = $('label[for="'+ thisId + '"]');

    if(!_this_state == true){
      _this.attr('checked',true);
      labelCheck.addClass('moreIcon');
    }
    else{
      _this.attr('checked',false);
      labelCheck.removeClass('moreIcon');
    }
  });

})(this.jQuery);