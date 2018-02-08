var keyWords =[{letter: ['a', 'A'],
  pWord: ['et', 'Spiritus']},
  {letter: [' '],
  pWord: ['crucifixus', 'caeli']},
  {letter: ['b', 'B'],
  pWord: ['ex', 'Lumine']},
  {letter: ['c', 'C'],
  pWord: ['Lumen', 'Patris']},
  {letter: ['d', 'D'],
  pWord: ['de', 'nunc']},
  {letter: ['e', 'E'],
  pWord: ['Credo', 'in']},
  {letter: ['f', 'F'],
  pWord: ['unum', 'Deo']},
  {letter: ['g', 'G'],
  pWord: ['Ave', 'expecto']},
  {letter: ['h', 'H'],
  pWord: ['gloria', 'vivificantem']},
  {letter: ['i', 'I'],
  pWord: ['mortuorum', 'saeculi']},
  {letter: ['j', 'J'],
  pWord: ['qui', 'Jesu']},
  {letter: ['k', 'K'],
  pWord: ['Domine', 'Archangele']},
  {letter: ['l', 'L'],
  pWord: ['divina', 'filii']},
  {letter: ['m', 'M'],
  pWord: ['Fili', 'vivus']},
  {letter: ['n', 'N'],
  pWord: ['sic', 'te']},
  {letter: ['o', 'O'],
  pWord: ['unctio', 'semper']},
  {letter: ['p', 'P'],
  pWord: ['sancti', 'Dominus']},
  {letter: ['q', 'Q'],
  pWord: ['tecum', 'Benedicta' ]},
  {letter: ['r', 'R'],
  pWord: ['tu', 'mulieribus']},
  {letter: ['s', 'S'],
  pWord: ['benedictus', 'fructus']},
  {letter: ['t', 'T'],
  pWord: ['ventris', 'Maria']},
  {letter: ['u', 'U'],
  pWord: ['Mater', 'peccatoribus']},
  {letter: ['v', 'V'],
  pWord: ['ad', 'pro']},
  {letter: ['w', 'W'],
  pWord: ['hora', 'mortis']},
  {letter: ['x', 'X'],
  pWord: ['nostra','Sancto']},
  {letter: ['y', 'Y'],
  pWord: ['tuum','regnum']},
  {letter: ['z', 'Z'],
  pWord: ['sanctificetur','Creator']}
];

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
  moreInfoBtn.classList.toggle("hoveredOrangeBox");
});
moreInfoBtn.addEventListener("mouseout", function(){
  moreInfoBtn.classList.toggle("hoveredOrangeBox");
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
    for(var j=0; j<keyWords.length; j++){
      for(var k=0; k<keyWords[j].letter.length; k++){
        if(keyWords[j].letter[k] === String.fromCharCode(input.charCodeAt(i))){
          output+= keyWords[j].pWord[Math.round(Math.random())] + " ";
          break;
        }
      }
    }
  }
  output+= ", Amen.";
  inputCypher.value = output;
}

function updatePlaintextOutput(){
  // var input = inputCypher.value;
  // var output = "";
  // var tempChar = "";
  // for(var i=0; i<input.length; i++){
  //   if(input[i] === " "){
  //     output += String.fromCharCode(parseInt(tempChar, 2).toString(10));
  //     tempChar = "";
  //   } else {
  //     tempChar += input[i];
  //   }
  // }
  // inputPlain.value = output;
}

function updateBackground() {
  // activeBack.innerHTML ="";
  // var firstChar = '1';
  // var prevChar;
  // //for every 19 pixels of screenwidth
  // for(var j=0; j<(window.innerWidth/19+1); j++){
  //   if(firstChar === '1'){
  //     prevChar = '0';
  //     firstChar = '0'
  //   } else {
  //     prevChar = '1';
  //     firstChar = '1';
  //   }
  //   //create one line (vertical)
  //   for(var i=0; i<(window.innerHeight/19+1); i++){
  //     if(prevChar === '0'){
  //       var aOne = document.createElement('span');
  //       aOne.innerHTML = '1';
  //       activeBack.appendChild(aOne);
  //       prevChar = '1';
  //     } else {
  //       var aZero = document.createElement('span');
  //       aZero.innerHTML = '0';
  //       activeBack.appendChild(aZero);
  //       prevChar = '0';
  //     }
  //   }
  //   var aBr = document.createElement('br');
  //   aBr.innerHTML = "<br>";
  //   activeBack.appendChild(aBr);
  // }
}
