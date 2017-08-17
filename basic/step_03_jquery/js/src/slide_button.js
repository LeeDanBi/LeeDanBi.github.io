(function(){
  //1.

  var slide_btn = $('.slide_btn');
  var slideUl = slide_btn.children('ul');
  var slideLi = slideUl.children('li');
  var slide_button = slide_btn.find('button');
  var slide_icon = slide_button.find('i');
  var slide_text = slide_button.find('span')

  var clickTF=1;

  slideUl.addClass('me_link');

  //2. 

  var slideLiWidth = slideLi.width();

  //console.log(slideLiWidth);
  //slideLi.css({height:slideLiWidth});

  slideLi.height(slideLiWidth);

  // show/hide - fadeIn/ fadeOut - slideDown/ slideUp - addClass/removeClass

  slide_btn.addClass('leftMove');

  //click, .leftMove를 삭제
  slide_button.on('click',function(e){
    e.preventDefault();
    //slide_btn.toggleClass('leftMove',500);
    clickTF=1;

    var slide_left = parseInt(slide_btn.css('left'));

    var slide_left2 = slide_btn.is('.leftMove');


    // 1. if문을 이용하여 이모지 변경처리

    //slide_icon.removeClass('fa-arrow-right').addClass('fa-arrow-left');

    // 2. 열기 글자 기능 토글

    //console.log(slide_button.text());
    //slide_button.find('span').text('닫기');

    //hasClass() : class이름의 존재 유무를 판단(true/flase)
    // is() : class뿐 아니라 다른 내용도 판단가능

    // if( slide_left == 0){
    //   slide_btn.addClass('leftMove', 500);
    //   slide_icon.removeClass('fa-arrow-left').addClass('fa-arrow-right');
    //   slide_text.text('열기');
    // }else{
    //   slide_btn.removeClass('leftMove', 500);
    //   slide_icon.removeClass('fa-arrow-right').addClass('fa-arrow-left');
    //   slide_text.text('닫기');
    // }


    if( slide_left2 ){
      slide_btn.removeClass('leftMove', 500);
      slide_icon.removeClass('fa-arrow-right').addClass('fa-arrow-left');
      slide_text.text('닫기');
    }else{
      slide_btn.addClass('leftMove', 500);
      slide_icon.removeClass('fa-arrow-left').addClass('fa-arrow-right');
      slide_text.text('열기');
    }



    // if(slide_text.text()=='닫기'){
    //  slide_icon.removeClass('fa-arrow-left').addClass('fa-arrow-right');
    //  slide_text.text('열기');
    // }else{
    //  slide_icon.removeClass('fa-arrow-right').addClass('fa-arrow-left');
    //  slide_text.text('닫기');
    // }

    // 3. 버튼에 마우스 올렸을 경우 .slide_btn 이 살짝 나오기 (약 10px정도)

  });



  var timed = 500;
  slide_button.on('mouseenter',function(e){
    e.preventDefault();
    
    var slide_left2 = slide_btn.is('.leftMove');
    if(slide_left2){

    slide_btn.css({marginLeft:'20px',transition:'all '+timed+'ms'});
    }
    
    }).on('mouseleave',function(e){
      e.preventDefault();
      slide_btn.css({marginLeft: 0,transition:'all '+timed+'ms'});

    });

})(this.jQuery);