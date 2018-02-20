var clipHolder = document.getElementsByClassName("paperClipsTop")[0];

drawClips();

window.onresize = function(){
  drawClips();
}

function drawClips(){
  var numOfClips = 14;
  clipHolder.innerHTML = "";
  for(var i = 0; i<numOfClips; i++){
    clipHolder.innerHTML +="<div class='paperClip hoveredGrayBox backshadow'></div>";
  }
  var clips = document.getElementsByClassName("paperClip");
  for(var i = 0; i<clips.length; i++){
    clips[i].style.margin = "0 " + Math.floor((clipHolder.offsetWidth-(numOfClips*10))/numOfClips/2) + "px";
  }
}

var arrowLeft = document.getElementById('toPlaintext');
var arrowRight = document.getElementById('toCypher');
var inputPlain = document.getElementsByTagName('textarea').item(1);
var inputCypher = document.getElementsByTagName('textarea').item(2);

inputPlain.addEventListener("focusin", function(){
  arrowLeft.classList.add("dimDocArrow");
});

inputCypher.addEventListener("focusin", function(){
  arrowRight.classList.add("dimDocArrow");
});

inputPlain.addEventListener("focusout", function(){
  arrowRight.classList.remove("dimDocArrow");
  arrowLeft.classList.remove("dimDocArrow");
});

inputCypher.addEventListener("focusout", function(){
  arrowRight.classList.remove("dimDocArrow");
  arrowLeft.classList.remove("dimDocArrow");
});
