var activeBack = document.getElementById('activeBinaryBack');
var arrowRight = document.getElementById('toCypher');
var arrowLeft = document.getElementById('toPlaintext');
var inputPlain = document.getElementsByTagName('textarea').item(0);
var inputCypher = document.getElementsByTagName('textarea').item(1);
var moreInfoBtn = document.getElementById('moreAboutCypher');
var plainTextString;
var cypheredTextString;

inputPlain.addEventListener("focusout", function(){
  arrowRight.classList.remove("dimArrow");
  arrowLeft.classList.remove("dimArrow");
});

inputCypher.addEventListener("focusout", function(){
  arrowRight.classList.remove("dimArrow");
  arrowLeft.classList.remove("dimArrow");
});

inputPlain.addEventListener("focusin", function(){
  arrowLeft.classList.add("dimArrow");
});

inputCypher.addEventListener("focusin", function(){
  arrowRight.classList.add("dimArrow");
});

inputPlain.addEventListener("keyup", function(){
  updateCypherOutput();
});

inputCypher.addEventListener("keyup", function(){
  updatePlaintextOutput();
});

moreInfoBtn.addEventListener("mouseover", function(){
  moreInfoBtn.classList.toggle("hoveredBlueBox");
});
moreInfoBtn.addEventListener("mouseout", function(){
  moreInfoBtn.classList.toggle("hoveredBlueBox");
});

moreInfoBtn.addEventListener("click", function(){
  document.getElementById('moreAboutElab').classList.toggle("infoInvisible");
});



updateBackground();

window.onresize = function(){
  updateBackground();
}


function updateCypherOutput(){
  var input = inputPlain.value;
  var output = "";
  for(var i=0; i<input.length; i++){
    output += input[i].charCodeAt(0).toString(2) + " ";
  }
  inputCypher.value = output;
}

function updatePlaintextOutput(){
  var input = inputCypher.value;
  var output = "";
  var tempChar = "";
  for(var i=0; i<input.length; i++){
    if(input[i] === " "){
      output += String.fromCharCode(parseInt(tempChar, 2).toString(10));
      tempChar = "";
    } else {
      tempChar += input[i];
    }
  }
  inputPlain.value = output;
}

function updateBackground() {
  activeBack.innerHTML ="";
  var firstChar = '1';
  var prevChar;
  //for every 19 pixels of screenwidth
  for(var j=0; j<(window.innerWidth/19+1); j++){
    if(firstChar === '1'){
      prevChar = '0';
      firstChar = '0'
    } else {
      prevChar = '1';
      firstChar = '1';
    }
    //create one line (vertical)
    for(var i=0; i<(window.innerHeight/19+1); i++){
      if(prevChar === '0'){
        var aOne = document.createElement('span');
        aOne.innerHTML = '1';
        activeBack.appendChild(aOne);
        prevChar = '1';
      } else {
        var aZero = document.createElement('span');
        aZero.innerHTML = '0';
        activeBack.appendChild(aZero);
        prevChar = '0';
      }
    }
    var aBr = document.createElement('br');
    aBr.innerHTML = "<br>";
    activeBack.appendChild(aBr);
  }
}
