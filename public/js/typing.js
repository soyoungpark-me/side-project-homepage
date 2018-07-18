var textSet = [
  'A rolling stone gathers no moss.',
  'Success doesn’t come to you, you go to it.',
  'Step by step goes a long way.',
  'You will never know until you try.',
  'The will of a man is his happiness.'
];

var speed = 110; /* The speed/duration of the effect in milliseconds */
var cursor = 5;
var index = 0;
var at = 0;
var timer = null;
var flag = false;

function typeWriter() {
  if (at % cursor == 0) {
    document.getElementById("demo").innerHTML = textSet[index].substring(0, at);
  } else {
    document.getElementById("demo").innerHTML = textSet[index].substring(0, at) + "_";
  }
  
  timer = setTimeout(typeWriter, speed);

  if (!flag) {
    speed = 120;
    cursor = 5;
    at++;
  } else {
    speed = 80;
    cursor = 10;
    at--;
  }

  if (flag && at == 0) {
      flag = false;
      index++;        
      at = 0;
    
  } else if (textSet[index].length + 1 == at) {
    speed = 350;
    flag = true;
    at--;
  }

  if (index == textSet.length) {
    index = 0;
  }
}

export default typeWriter;