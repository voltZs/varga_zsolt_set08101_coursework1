var activeBack = document.getElementById('activeBinaryBack');
var arrowRight = document.getElementById('toCypher');
var arrowLeft = document.getElementById('toPlaintext');
var inputPlain = document.getElementsByTagName('textarea').item(0);
var inputCypher = document.getElementsByTagName('textarea').item(1);
var moreInfoBtn = document.getElementById('moreAboutCypher');
var plainTextString;
var cypheredTextString;
var cipherKeys = document.querySelectorAll('div#keyChoice span');

var currentLetter = 'K';
var possibleKeys =[4, 3, 6, 5];
var letterValuePairs= [];
var numOfColumns;


init();




//-------------------functions-------------------

function init(){

  // add key value pairs for the whole alphabet into the letterValuePairs
  // variable based on the possibleKeys array

  var count = 0;
  for(var i=65; i<91; i++){
    var element = {};
    element.letter = String.fromCharCode(i);
    element.keyVal = possibleKeys[count];
    letterValuePairs.push(element);
    count++;
    if(count=== possibleKeys.length){
      count=0;
    }
  }


  updateCipherSettings(currentLetter);
  updateKeyDisplay();
  console.log(currentLetter);
  console.log(numOfColumns);

  for(var i = 1; i<cipherKeys.length; i++){

    cipherKeys[i].addEventListener("click", function(){

      updateCipherSettings(this.innerText);
      updateKeyDisplay();
      console.log(currentLetter);
      console.log(numOfColumns);
    });

    cipherKeys[i].addEventListener("mouseenter", function(){
      updateKeyDisplay();
      this.style.opacity = "1";
    });

    cipherKeys[i].addEventListener("mouseleave", function(){
      updateKeyDisplay();
    });
  }

  // add event listeners and initial processes
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
    // updateCypherOutput();
  });

  inputCypher.addEventListener("keyup", function(){
    // updatePlaintextOutput();
  });

  moreInfoBtn.addEventListener("mouseover", function(){
    moreInfoBtn.classList.toggle("hoveredGreenBox");
  });
  moreInfoBtn.addEventListener("mouseout", function(){
    moreInfoBtn.classList.toggle("hoveredGreenBox");
  });

  moreInfoBtn.addEventListener("click", function(){
    document.getElementById('moreAboutElab').classList.toggle("infoInvisible");
  });

  updateBackground();

  window.onresize = function(){
    updateBackground();
  }
}


function updateKeyDisplay() {
  makeAllTransparent();
  for(var i = 1; i<cipherKeys.length; i++){
    if(cipherKeys[i].innerText === currentLetter){
      cipherKeys[i].style.opacity = "1";
    } else {
      cipherKeys[i].style.opacity = "0.5";
    }
  }
}
// makeAllTransparent();
// keyObj.style.opacity = "1";


function makeAllTransparent() {
  for(var i = 1; i<cipherKeys.length; i++){
    cipherKeys[i].style.opacity = "0.5";
  }
}

function updateCipherSettings(str) {
  currentLetter = str;
  for(var i = 0; i<letterValuePairs.length; i++){
    if(letterValuePairs[i].letter === str){
        numOfColumns = letterValuePairs[i].keyVal;
    }
  }
}




// function updateCypherOutput(){
//   var input = inputPlain.value;
//   var output = "";
//   for(var i=0; i<input.length; i++){
//     output += input[i].charCodeAt(0).toString(2) + " ";
//   }
//   inputCypher.value = output;
// }
//
// function updatePlaintextOutput(){
//   var input = inputCypher.value;
//   var output = "";
//   var tempChar = "";
//   for(var i=0; i<input.length; i++){
//     if(input[i] === " "){
//       output += String.fromCharCode(parseInt(tempChar, 2).toString(10));
//       tempChar = "";
//     } else {
//       tempChar += input[i];
//     }
//   }
//   inputPlain.value = output;
// }

function updateBackground() {
  var backElements = document.querySelectorAll('div#activeTransposBack div');
  for(var i = 0; i<backElements.length; i++){
    backElements[i].style.fontSize = window.innerWidth/4 + "px";
    document.getElementById('activeTransposBack').style.minHeight = window.innerWidth/2 + "px";
  }
}
