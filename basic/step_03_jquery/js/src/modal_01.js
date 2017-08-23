(function($){
//addClass 다수처리를 위한 함수생성
var ModalOff = function(display){ 
  $('.modal_box, .modal_bg').addClass(display);
};
var ModalOn = function(display){
  $('.modal_box, .modal_bg').removeClass(display);
};

//ModalOn('modal_dp');

ModalOff('modal_dp');
//-----------------------

$('.modal_bg').on('click',function(){
  ModalOff('modal_dp');
});
//-----------------------



var galleryBox = $('.gallery_list');
var gallery_list = galleryBox.children('li');
var url = '../img/modal_gallery/';
var galleryImg = [
  {'img':{'thum':'j01.jpg', 'big':'j01_big.jpg'}},
  {'img':{'thum':'j02.jpg', 'big':'j02_big.jpg'}},
  {'img':{'thum':'j03.jpg', 'big':'j03_big.jpg'}},
  {'img':{'thum':'j04.jpg', 'big':'j04_big.jpg'}},
  {'img':{'thum':'j05.jpg', 'big':'j05_big.jpg'}},
  {'img':{'thum':'j06.jpg', 'big':'j06_big.jpg'}},
  {'img':{'thum':'j07.jpg', 'big':'j07_big.jpg'}},
  {'img':{'thum':'j08.jpg', 'big':'j08_big.jpg'}}
];

var i=0;
var halLength = galleryImg.length;
for(;i<halLength;i++){
  gallery_list.eq(i).css({'backgroundImage': 'url(' + url + galleryImg[i].img.thum + ')',
                          'backgroundRepeat' : 'no-repeat',
                          'backgroundPosition' : 'center'});
}


gallery_list.on('click',function(e){
  e.preventDefault();
  ModalOn('modal_dp');
  var _this = $(this);
  var bigIndex = _this.index();
  $('.modal_box').css({'backgroundImage': 'url(' + url + galleryImg[bigIndex].img.big + ')'});
});
 
})(this.jQuery);