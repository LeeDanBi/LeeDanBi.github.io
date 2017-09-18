(function($){

  // 배너의 maple effect _________________
  var addBanner = $('#addBanner');
  var maple_1_l = $('.maple_1_l');
  var maple_2_l = $('.maple_2_l');
  var maple_3_l = $('.maple_3_l');
  var maple_1_r = $('.maple_1_r');
  var maple_2_r = $('.maple_2_r');
  var maple_3_r = $('.maple_3_r');

  addBanner.on('mousemove',function(e){
    var pagex = e.pageX - addBanner.offset().top;
    var pagey = e.pageY;
    var winW = $(window).innerWidth();
    var winH = $(window).innerHeight();

    var myX = pagex/winW *100;
    var myY = pagey/winH *100;
    var percentX = parseInt(myX);
    var percentY = parseInt(myY);

    maple_1_l.css({transform:'translate('+ -percentX / 2 + 'px, '+ -percentY / 8 + 'px)'});
    maple_2_l.css({transform:'translate('+ percentX + 'px, '+ percentY / 8 + 'px)'});
    maple_3_l.css({transform:'translate('+ -1.8 * percentX + 'px, '+ percentY / 8 + 'px)'});
    maple_1_r.css({transform:'translate('+ percentX / 2 + 'px, '+ percentY / 8 + 'px)'});
    maple_2_r.css({transform:'translate('+ -percentX + 'px, '+ -percentY / 8 + 'px)'});
    maple_3_r.css({transform:'translate('+ 1.8 * percentX + 'px, '+ percentY / 8 + 'px)'});

  });
})(this.jQuery);