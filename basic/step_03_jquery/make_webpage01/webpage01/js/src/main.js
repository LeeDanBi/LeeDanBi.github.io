(function($){
  // var h2 = $('h2');
  // var UpperCase = h2.text().toUpperCase();
  // h2.text(UpperCase);

  //_________________________________ 대문자

  var gnbWrap = $('#gnbWrap');
  var gnbMenuBar = $('#gnb');
  var gnb_link = gnbMenuBar.find('dt');
  var gnb_menu = gnbMenuBar.find('dd');

  gnb_menu.hide();
  gnbWrap.hide();

  gnb_link.on('mouseenter',function(){
    gnb_menu.stop().slideDown();
    gnbWrap.stop().slideDown();
  });

  gnbWrap.on('mouseleave',function(){
    gnb_menu.stop().delay(500).slideUp();
    gnbWrap.stop().delay(500).slideUp();
  });


  //________________________________ gnb

  var bannerUl = $('.bannerwrap');
  var btnLeft = $('.btn_left');
  var btnRight = $('.btn_right');

  bannerUl.css({marginLeft: -100 +'%'})
  
  btnLeft.on('click',function(e){
    e.preventDefault();
    bannerUl.animate({marginLeft:0},500,function(){
      var li_last=bannerUl.children('li').last();
      bannerUl.prepend(li_last);
      bannerUl.css({marginLeft:-100+'%'});
    });
  });
  btnRight.on('click',function(e){
    e.preventDefault();
    bannerUl.animate({marginLeft:-200 +'%'},500,function(){
      var li_first=bannerUl.children('li').first();
      bannerUl.append(li_first);
      bannerUl.css({marginLeft:-100+'%'});
    });
  });

  // _______________________________ adBanner

  var tabMenu = $('.tabmenu');
  var tabMenu_li = tabMenu.children('li');
  var tabText = $('.tab_content');
  tabMenu_li.on('click',function(e){
    e.preventDefault();
    var _this = $(this);
    var content_eq = _this.index();
    _this.siblings().css({backgroundColor:'#fa0'});
    _this.css({backgroundColor:'#fff'});
    tabText.siblings('.tab_content').stop().hide();
    tabText.eq(content_eq).stop().show();
  });

  // ________________________________ contentBox

  var accordionMenu = $('.accordion_menu')
  var accordion_btn = accordionMenu.children('dt');
  var accordion_con = accordionMenu.children('dd');
  var pointIcon = $('.aco_icon');

  pointIcon.css({transform:'rotate(45deg)'});

  accordion_btn.on('click',function(e){
    e.preventDefault();
    var _this = $(this);
    var content_eq = accordion_btn.index(this);
    _this.siblings('dt').css({backgroundColor:'#b6b6b6'});
    _this.css({backgroundColor:'#33d8d8'});
    _this.siblings().find('.aco_icon').css({transform:'rotate(45deg)',transition:'all 500ms'});
    _this.find('.aco_icon').css({transform:'rotate(90deg)',transition:'all 500ms'});
    accordion_con.siblings('dd').stop().slideUp();
    accordion_con.eq(content_eq).stop().slideDown();
  });

  // _________________________________ accordion

  var indicateBox = $('.indication_box');
  var indicate_btn = indicateBox.children('li');

  indicate_btn.on('click',function(){
    var _this = $(this);
    _this.siblings('li').css({backgroundColor:'#fff'});
    _this.css({backgroundColor:'#a53300'});
  });

  // ___________________________________ Indicate

  var btnMenu = $('.img_btn');
  var img_btn = btnMenu.children('li');
  var large_img = $('.large_img');

  img_btn.on('click',function(){
    var _this = $(this);
    var index_btn = _this.index()+1;
    _this.siblings().css({backgroundColor:'#fff'});
    _this.css({backgroundColor:'#fa0'});
    large_img.css({backgroundImage:'url(\'../image/gallery/big/gallery_'+ index_btn +'.jpg\')', backgroundSize: '100%'});
  });

  // ________________________________ gallery
})(this.jQuery);