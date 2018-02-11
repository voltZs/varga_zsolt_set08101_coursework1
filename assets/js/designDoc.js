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
