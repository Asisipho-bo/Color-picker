// Display color names on the modal


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("add-to-cart");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("agree-btn")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//Wnen user clicks +, add 1. When user clicks -, subtract 1
var valueCount

//Plus button
document.querySelector('#add').addEventListener('click', function()
{
  //getting value of input
  valueCount = document.getElementById('quantity').value;
  
  //input value increment by 1
  valueCount++;

  //Setting increment input value
  document.getElementById('quantity').value = valueCount
})

//Minus button
document.querySelector('#subtract').addEventListener('click', function()
{
  //getting value of input
  valueCount = document.getElementById('quantity').value;
  
  //input value increment by 1
  valueCount--;

  //Setting increment input value
  document.getElementById('quantity').value = valueCount
})





// Get the modal
var Modal = document.getElementById("linkModal");

// Get the button that opens the modal
var btn = document.getElementById("need-help");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("dismiss")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    Modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    Modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == Modal) {
    Modal.style.display = "none";
  }
}

function myFunction() {
  alert("Thank you for your purchase. Hope to see you soon!");
}