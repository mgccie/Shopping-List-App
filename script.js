// Creating the global variables needed
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var div = document.querySelector("div");

function inputLength() {
  return input.value.length;
}
// Creating the action to remove items added
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}
// Creating the users lists items and delete button for each
function createListElement() {
  var li = document.createElement("li");
  var btn = document.createElement("button");
  var rm = document.createTextNode("Delete");
  btn.onclick = removeParent;
  btn.setAttribute("style","color:red");
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(btn);
  ul.appendChild(li);
  btn.appendChild(rm);
  input.value = "";
  document.li.appendChild(btn);
}

// Defining the actions when the mouse is clicked
button.addEventListener("click", function() {
  if (inputLength() > 0) {
     createListElement();
    }
})
// Defining the actions when the enter key is pressed
input.addEventListener("keypress", function(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
     createListElement();
    }
})
