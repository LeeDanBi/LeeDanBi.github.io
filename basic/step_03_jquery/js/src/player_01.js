(function(){
  // video를 선택
  // 재생버튼 선택
  // 정지버튼 선택


  var vi = $('#videoBox'); //하나만 있더라도 몇번쨰인지 써야한다.
  var mu = $('#musicBox');
  var video = vi.find('video');
  var audio = mu.find('audio');

// $('audio')에서 왜 [0]을 가져야 하는가?
  // console.log( $('audio') );
  // console.log( $('audio')[0] );
  // //console.log( $('audio')[0].find('source') );
  // console.log( $('audio').find('source') );
  // console.log( $('audio').find('source').attr('src') );
  // console.log( $('audio').find('source')[0] );
  // //console.log( $('audio').find('source')[0].attr('src') );

  var btn_play = $('.play');
  var btn_pause = $('.pause');

  var vi_play = vi.find('.play');
  var vi_pause = vi.find('.pause');
  var mu_play = mu.find('.play');
  var mu_pause = mu.find('.pause');
  var mu_next = mu.find('.next');
  var mu_prev = mu.find('.prev');

  vi_play.on('click',['button'],function(e){
    e.preventDefault();
    video[0].play();
  });
  vi_pause.on('click',['button'],function(e){
    e.preventDefault();   
    video[0].pause();
  });
//---------------------------------------------
  var musicUrl = 'D:/work/music/';
  var myMusicList=[
                    {'mp3': '01- In Da Club [Explicit].mp3' , 'nar':'음악 설명 또는 가사'},
                    {'mp3': '02- 21 Questions [feat Nate Dogg] [Explicit].mp3' , 'nar' : '음악 설명 또는 가사'},
                    {'mp3': '03- P I M P [Explicit].mp304- Disco Inferno [Explicit].mp3' , 'nar' : '음악 설명 또는 가사'},
                    {'mp3': '04- Disco Inferno [Explicit].mp3' , 'nar' : '음악 설명 또는 가사'},
                    {'mp3': '05- Candy Shop [feat Olivia] [Explicit].mp3' , 'nar' : '음악 설명 또는 가사'},
                    {'mp3': '07- Outta Control (Remix) [feat Mobb Deep] [Explicit].mp3' , 'nar' : '음악 설명 또는 가사'},
                    {'mp3': '08- Hustler s Ambition [Explicit].mp3' , 'nar' : '음악 설명 또는 가사'},
                    {'mp3': '09- Best Friend (Remix) [feat Olivia].mp3' , 'nar' : '음악 설명 또는 가사'},
                    {'mp3': '10- Window Shopper [Explicit].mp3' , 'nar' : '음악 설명 또는 가사'},
                    {'mp3': 'just_a_little_bit.mp3' , 'nar' : '음악 설명 또는 가사'}
                  ];
  
  mu_pause.hide();

  mu_play.on('click',['button'],function(e){
    e.preventDefault();
    audio[0].play();
    mu_pause.fadeIn();
    mu_play.fadeOut();
  });
  mu_pause.on('click',['button'],function(e){
    e.preventDefault();
    audio[0].pause();
    mu_pause.fadeOut();
    mu_play.fadeIn();
  });

  //var muNext = $('.next');
  var i = 0;
  mu_next.on('click',['button'],function(e){
    e.preventDefault();
    i += 1
    audio.find('source').attr({'src': musicUrl + myMusicList[i].mp3});
    audio[0].load();
    audio[0].play();
  });
})(this.jQuery);