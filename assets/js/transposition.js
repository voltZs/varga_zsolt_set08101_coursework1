var activeBack = document.getElementById('activeBinaryBack');
var arrowRight = document.getElementById('toCypher');
var arrowLeft = document.getElementById('toPlaintext');
var inputPlain = document.getElementsByTagName('textarea').item(0);
var inputCypher = document.getElementsByTagName('textarea').item(1);
var moreInfoBtn = document.getElementById('moreAboutCypher');
var plainTextString;
var cypheredTextString;
var cipherKeys = document.querySelectorAll('div#keyChoice span');

var currentLetter = 'F';
var possibleKeys =[2, 5, 7, 9, 8, 4, 3, 5, 3, 8, 9, 7, 5, 6, 2, 3, 5, 5, 4, 2];
var letterValuePairs= [];
var numOfColumns;


init();

//-------------------functions-------------------

function init(){

  // add key value objects for the whole alphabet into the letterValuePairs
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

  for(var i = 1; i<cipherKeys.length; i++){

    cipherKeys[i].addEventListener("click", function(){

      updateCipherSettings(this.innerText);
      updateKeyDisplay();
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
    updateCypherOutput();
  });

  inputCypher.addEventListener("keyup", function(){
    updatePlaintextOutput();
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
  for(var i = 1; i<cipherKeys.length; i++){
    if(cipherKeys[i].innerText === currentLetter){
      cipherKeys[i].style.opacity = "1";
    } else {
      cipherKeys[i].style.opacity = "0.4";
    }
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




function updateCypherOutput(){
  var input = inputPlain.value;
  var numOfRows = Math.ceil(input.length/numOfColumns);
  var plainTextArray =[];
  var cypheredString ="";

  for (var i =0; i<numOfRows; i++){
    var oneLine ="";
    oneLine = input.slice(i*numOfColumns, (i+1)*numOfColumns);
    plainTextArray.push(oneLine);
  }


  for(var i = 0; i<numOfColumns; i++){
    for(var j = 0; j<numOfRows; j++){
      if(plainTextArray[j].charAt(i) === "") {
        cypheredString += "∞";
      } else {
        cypheredString += plainTextArray[j].charAt(i);
      }
    }
  }
  inputCypher.value = cypheredString;
}

function updatePlaintextOutput(){
  var input = inputCypher.value;
  var numOfRows = Math.ceil(input.length/numOfColumns);
  var cipheredTextArray =[];
  var plainString = "";

  for (var i =0; i<numOfColumns; i++){
    var oneLine ="";
    oneLine = input.slice(i*numOfRows, (i+1)*numOfRows);
    cipheredTextArray.push(oneLine);
  }

  for(var i = 0; i<numOfRows; i++){
    for(var j = 0; j<numOfColumns; j++){
      if(cipheredTextArray[j].charAt(i) === "∞") {
        plainString += "";
      } else {
        plainString += cipheredTextArray[j].charAt(i);
      }
    }
  }
  inputPlain.value = plainString;
}

function updateBackground() {
  var backElements = document.querySelectorAll('div#activeTransposBack div');
  for(var i = 0; i<backElements.length; i++){
    backElements[i].style.fontSize = window.innerWidth/4 + "px";
    document.getElementById('activeTransposBack').style.minHeight = window.innerWidth/2 + "px";
  }
}
