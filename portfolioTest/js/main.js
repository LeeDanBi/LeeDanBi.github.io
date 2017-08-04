

var goRight = document.querySelector('#goRight');
var goLeft = document.querySelector('#goLeft');
var eContain = document.querySelector('#eventBox ul');

goRight.addEventListener('click',EContain);
function EContain(){
  eContain.style.transform += "translate(-320px,0)";
  eContain.style.transition = "all 700ms";
}

goLeft.addEventListener('click',EContain2);
function EContain2(){
  eContain.style.transform += "translate(320px,0)";
  eContain.style.transition = "all 700ms";
}