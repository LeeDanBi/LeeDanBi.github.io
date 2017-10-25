

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
  var i = 0;
  var li_first;


  goLeft.on('click',GoLeft_li);
  goRight.on('click',GoRight_li);

  //왼쪽 버튼
  function GoLeft_li(){
    i--;
    console.log(i);
    if(i<=0);{

    }
    eContain.animate({marginLeft: -324 * i + 'px'});
  }

  //오른쪽 버튼
  function GoRight_li(){
    i++;
    console.log(i);
    eContain.animate({marginLeft: -324 * i +'px'});
  };


  // var eventTimerId = setInterval(EventTimer, 5000);

  // function EventTimer(){
  //   eContain.style.transform += "translate(-320px,0)";
  //   eContain.style.transition = "all 500ms ease-in";
  // }

  // var eContain2 = $('#eventBox ul');

  // eContain2.append(eContain2);

})(this.jQuery);