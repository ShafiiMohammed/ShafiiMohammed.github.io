// This will make the text bigger when "Bigger" is pressed
function BiggerClick(){
  // Change text then call alert
  document.getElementById("text").style.fontSize = "4em";
  alert("Bigger!");
}

// Do functions to change styles in one method (Use checked function)
function changeStyles() {
  // Check if FancySchmancy radio button is checked
  if(document.getElementById("FancySchmancy").checked){
    //Change text and print alert
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementedById("text").style.textDecoration = "underline";
    alert("Fancy!")
  }

  // Check if BoringBetty radio button is checked
  if(document.getElementById("BoringBetty").checked) {
    //Revert text and print alert
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementedById("text").style.textDecoration = "none";
    alert("Boring!");
  }
}

// Turn all strings into uppercase and add a -Moo at the end of sentenced
function mooClick(){
  // Set text 
  document.getElementById("text").value = document.getElementById("text").value.toUpperCase();
  document.getElementById("text").value = document.getElementById("text").value.split(".").join("-Moo");
}