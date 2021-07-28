var i = 0;
texts = [
    "Web",
    "Game",
    "Desktop"
];
var txtIndex=0;
var txt = texts[txtIndex];
var speed = 500;

function twWrite(){
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(twWrite, speed);
  }else if(i == txt.length){twRemove()};
};

function twRemove(){
    if (i > -1) {
      document.getElementById("demo").innerHTML = txt.slice(0, i);
      i--;
      setTimeout(twRemove, speed);
    }else if(i == -1){txtIndex++; txt=texts[txtIndex%3]; twWrite();};
  };