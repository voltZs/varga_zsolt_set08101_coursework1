var cipherDropdown = document.getElementsByClassName('navBarDrop')[0];
var dropDownContainer = document.getElementsByClassName('dropDownContainer')[0];
var dropDownItems = document.getElementsByClassName('dropDownItem');

cipherDropdown.addEventListener("mouseenter", function(){
  document.getElementsByClassName('dropDownContainer')[0].classList.add("dropDownVisible");
  enlargeDropDownItems()
});
cipherDropdown.addEventListener("mouseleave", function(){
  document.getElementsByClassName('dropDownContainer')[0].classList.remove("dropDownVisible");
  minimiseDropDownItems()
});
dropDownContainer.addEventListener("mouseenter", function(){
  document.getElementsByClassName('dropDownContainer')[0].classList.add("dropDownVisible");
  enlargeDropDownItems()
});
dropDownContainer.addEventListener("mouseleave", function(){
  document.getElementsByClassName('dropDownContainer')[0].classList.remove("dropDownVisible");
  minimiseDropDownItems()
});


function enlargeDropDownItems(){
  for(var i=0; i<dropDownItems.length;i++){
    dropDownItems[i].classList.add("dropDownItemLarge")
  }
}

function minimiseDropDownItems(){
  for(var i=0; i<dropDownItems.length;i++){
    dropDownItems[i].classList.remove("dropDownItemLarge")
  }
}
