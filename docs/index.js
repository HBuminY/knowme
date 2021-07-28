var i = 0;
texts = [
    "Web",
    "Game",
    "Desktop"
];
var txtIndex=0;
var txt = texts[txtIndex];
var OriSpeed = 300;
var speed = OriSpeed

function twWrite(){
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++; if(speed>100){speed-=50};
    setTimeout(twWrite, speed);
  }else if(i == txt.length){speed = OriSpeed; console.log("removing"); setTimeout(twRemove, 2000)};
};

function twRemove(){
    if (i > -1) {
      document.getElementById("demo").innerHTML = txt.slice(0, i);
      i--; if(speed>100){speed-=50};
      setTimeout(twRemove, speed);
    }else if(i == -1){speed = OriSpeed; txtIndex++; txt=texts[txtIndex%3]; twWrite();};
};

document.onload = twWrite();