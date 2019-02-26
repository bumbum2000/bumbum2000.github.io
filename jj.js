var Ysourse
 
var myAge;
var myStatus;
function Sourse()
{
  var enter = prompt ("введите что я должна сказать")
  var utterThis = new SpeechSynthesisUtterance(enter);
window.speechSynthesis.speak(utterThis);
}
function Age(currentAge){
myAge = currentAge;
}

function State(currentStatus){
myStatus = currentStatus
}

function Message(){
switch(myAge + myStatus){
case('ad'):
alert("Вы слишком молоды, чтоб давать такие оценки");
break;

case('ae'):
alert("Несмотря на ваш возраст, вы все же можете трезво оценивать");
break;

case('af'):
alert("Хоть вы и молоды, вы блестяще разбираетесь в сайтах!");
break;

case('bd'):
alert("Вы вроде уже взрослый, а говорите глупости");
break;

case('be'):
alert("Сразу видно, вы немного разбираетесь");
break;

case('bf'):
alert("Вы в рассвете сил, как физических так и интелектуальных");
break;

case('cd'):
alert("Седина в бороду бес в ребро?");
break;

case('ce'):
alert("Сразу видно опытного человека");
break;

case('cf'):
alert("Да вы совсем не отстаете от прогресса!");
break;

default:
alert('Мы еще не обработали такое сочетание возраста и настроения');
break;
}
}