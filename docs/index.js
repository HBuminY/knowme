var i = 0;
texts = [
    "Web",
    "Game",
    "Desktop"
];
let txtIndex=0;
var txt = texts[txtIndex];
var speed = 500;

function twWrite(){
    let _txt = texts[txtIndex%2];
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += _txt.charAt(i);
    i++;
    setTimeout(twWrite, speed);
  }else if(i == _txt.length){twRemove()};
};

function twRemove(){
    let _txt = texts[txtIndex%2];
    if (i > -1) {
      document.getElementById("demo").innerHTML = _txt.slice(0, i);
      i--;
      setTimeout(twRemove, speed);
    }else if(i == -1){twWrite(); txtIndex++;};
  };