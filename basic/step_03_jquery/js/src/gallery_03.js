(function($){
//기본 경로

var url = '../img/modal_gallery/';
// 1. gallery page를 json 형태로 취해서 사용
var image = [
    {'thum' : {'img' :'j01.jpg', 'alt' : '이미지 설명'}, 
     'big' : {'img' :'j01_big.jpg', 'alt' : '이미지 설명'} },
    {'thum' : {'img' :'j02.jpg', 'alt' : '이미지 설명'}, 
     'big' : {'img' :'j02_big.jpg', 'alt' : '이미지 설명'} },
    {'thum' : {'img' :'j03.jpg', 'alt' : '이미지 설명'}, 
     'big' : {'img' :'j03_big.jpg', 'alt' : '이미지 설명'} },
    {'thum' : {'img' :'j04.jpg', 'alt' : '이미지 설명'}, 
     'big' : {'img' :'j04_big.jpg', 'alt' : '이미지 설명'} },
    {'thum' : {'img' :'j05.jpg', 'alt' : '이미지 설명'}, 
     'big' : {'img' :'j05_big.jpg', 'alt' : '이미지 설명'} },
    {'thum' : {'img' :'j06.jpg', 'alt' : '이미지 설명'}, 
     'big' : {'img' :'j06_big.jpg', 'alt' : '이미지 설명'} },
    {'thum' : {'img' :'j07.jpg', 'alt' : '이미지 설명'}, 
     'big' : {'img' :'j07_big.jpg', 'alt' : '이미지 설명'} },
    {'thum' : {'img' :'j08.jpg', 'alt' : '이미지 설명'}, 
     'big' : {'img' :'j08_big.jpg', 'alt' : '이미지 설명'} },
    {'thum' : {'img' :'j09.jpg', 'alt' : '이미지 설명'}, 
     'big' : {'img' :'j09_big.jpg', 'alt' : '이미지 설명'} },
    {'thum' : {'img' :'j10.jpg', 'alt' : '이미지 설명'}, 
     'big' : {'img' :'j10_big.jpg', 'alt' : '이미지 설명'} },
    {'thum' : {'img' :'j11.jpg', 'alt' : '이미지 설명'}, 
     'big' : {'img' :'j11_big.jpg', 'alt' : '이미지 설명'} },
    {'thum' : {'img' :'j12.jpg', 'alt' : '이미지 설명'}, 
     'big' : {'img' :'j12_big.jpg', 'alt' : '이미지 설명'} }
  ];

  // console.log(image.length);
  // console.log(image[5]);
  // console.log(url + image[5].thum);

  //2. #wrap 내부에 thum리스트 만들기

  $('#wrap').append('<div class="gallery_list"><ul></ul></div>');
  var galleryUl = $('.gallery_list').children('ul');
  var i = 0;
  var imageLength = image.length;
  var imgSource, imgAlt;

  for(;i<imageLength;i++){
    imgSource = url + image[i].thum.img;
    imgAlt = image[i].thum.alt;
    // ul내부에 이미지 갯수만큼 li,button, img 생셩
    galleryUl.append('<li><button type="button"><img></img></button></li>');
    // i번째에 해당하는 li내부의 img의 속성값 처리
    galleryUl.children('li').eq(i).find('img').attr({'src': imgSource, 'alt': imgAlt});
  }//for
// button a

  //3. gallery 큰 이미지 창 생성

  // $('.gallery_list').before('<div class="gallery_photo"><img></img></div>');
  //최초의 이미지 생성

  // 3-1. gallery페이지를 모달 윈도우로 변경해보자
    //이미지를 담을 상자 .gallery_photo
    $('.gallery_list').before('<div class="gallery_photo"><img></div>');
    // 배경이 흐리게 처리되는 상자
    $('.gallery_photo').after('<div class="gray_box"></div>')

    var photoBox  = $('.gallery_photo');
    var photoBack = $('.gray_box');

  var bigSource, bigAlt;

  bigSource = url + image[0].big.img;
  bigAlt = image[0].big.alt;
  $('.gallery_photo').find('img').attr({'src':bigSource, 'alt':bigAlt});

    var imgWidth  = parseInt(photoBox.find('img').width());
    var imgHeight = parseInt(photoBox.find('img').height());

     photoBox.css({'width': 'inherit',
      'position':'fixed', 'left': '50%', 'top': '50%', 'zIndex': '1500', 
                  'marginLeft':-imgWidth/2 +'px', 'marginTop': -imgHeight/2 +'px'});
     photoBack.css({'position': 'fixed', 'zIndex':'1400', 'left':0, 'top':0, 'width' :'100%', 'height' : '100%', 'backgroundColor': 'rgba(0,0,0,0.4)'});


  //4. '.gallery_list'의 'li'를 클릭하면, 큰이미지에 내용변경 처리

  var img_list = galleryUl.children('li');

  img_list.on('click',function(e){
    e.preventDefault();
    // li중에 무어승ㄹ 선택했는지 확인
    var _this = $(this);
    // console.log(_this);
    // console.log(_this.index());
    var _this_index = _this.index();

    bigSource = url + image[_this_index].big.img;
    bigAlt = image[_this_index].big.alt;
    $('.gallery_photo').find('img').attr({'src':bigSource, 'alt':bigAlt});

  });


})(this.jQuery);
