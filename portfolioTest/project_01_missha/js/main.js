

// goRight.addEventListener('click',EContain);
// function EContain(){
//   eContain.style.transform += "translate(-320px,0)";
//   eContain.style.transition = "all 700ms";
// }

// goLeft.addEventListener('click',EContain2);
// function EContain2(){
//   eContain.style.transform += "translate(320px,0)";
//   eContain.style.transition = "all 700ms";
// }

(function($){

  var goRight = $('#goRight');
  var goLeft = $('#goLeft');
  var eContain = $('#eventBox ul');
  var li_last = eContain.find('li').last();
  var li_first;
  li_last.prependTo(eContain);

  goRight.on('click',GoRight_li);

  function GoRight_li(e){
    e.preventDefault();

    eContain.stop().animate({marginLeft:-640+'px'}, 500, function(){
    li_first = eContain.children('li').first(); 
    li_first.appendTo(eContain);
    eContain.css({marginLeft: -320+'px'});
    });
  };


  // var eventTimerId = setInterval(EventTimer, 5000);

  // function EventTimer(){
  //   eContain.style.transform += "translate(-320px,0)";
  //   eContain.style.transition = "all 500ms ease-in";
  // }

  // var eContain2 = $('#eventBox ul');

  // eContain2.append(eContain2);

})(this.jQuery);