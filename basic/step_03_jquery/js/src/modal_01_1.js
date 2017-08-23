(function(){

var modalBox = $('.modal_box');
var modalBg = $('.modal_bg');


var myObt = {
  'ModalOff': function(){
              modalBox.addClass('modal_dp');
              modalBg.addClass('modal_dp');
  },
  'ModalOn': function(){
             modalBox.removeClass('modal_dp');
             modalBg.removeClass('modal_dp');
  }
};



})(this.jQuery);