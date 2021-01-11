//Displaying quantity of selected items on the counter
function quantityFunction() {
  document.getElementById("counter").innerHTML = document.getElementById("quantity").value;
  document.getElementById("color-quantity").innerHTML = document.getElementById("quantity").value;
  num1 = document.getElementById("quantity").value;
  num2 = document.getElementById("discount-price").innerHTML;
  document.getElementById("full-price").innerHTML = num1 * num2;
  document.getElementById("order-info").innerHTML = document.getElementByClass("color-circles").button;
}


// Display color names on the modal and color title; display prices
function colorFunction() {
  document.getElementById("color-name").innerHTML = " Red";
  document.getElementById("actual-price").innerHTML =" 30.99";
  document.getElementById("discount-price").innerHTML =" 23.35";
  document.getElementById("color-id").innerHTML =" Red"
  document.getElementById("color-price").innerHTML = " 23.35";
  
}

function colorFunction2() {
  document.getElementById("color-name").innerHTML = " Blue";
  document.getElementById("actual-price").innerHTML =" 32.99";
  document.getElementById("discount-price").innerHTML =" 24.75";
  document.getElementById("color-id").innerHTML =" Blue"
  document.getElementById("color-price").innerHTML = " 24.75";
}

function colorFunction3() {
  document.getElementById("color-name").innerHTML = " Orange";
  document.getElementById("actual-price").innerHTML =" 35.99";
  document.getElementById("discount-price").innerHTML =" 26.99";
  document.getElementById("color-id").innerHTML =" Orange"
  document.getElementById("color-price").innerHTML = " 26.99";
}

function colorFunction4() {
  document.getElementById("color-name").innerHTML = " Green";
  document.getElementById("actual-price").innerHTML =" 24.99";
  document.getElementById("discount-price").innerHTML =" 18.75";
  document.getElementById("color-id").innerHTML =" Green";
  document.getElementById("color-price").innerHTML = " 18.75";
}

function colorFunction5() {
  document.getElementById("color-name").innerHTML = " Dark-grey";
  document.getElementById("actual-price").innerHTML =" 37.99";
  document.getElementById("discount-price").innerHTML =" 28.5";
  document.getElementById("color-id").innerHTML =" Dark-grey";
  document.getElementById("color-price").innerHTML = " 28.5";
}

function colorFunction6() {
  document.getElementById("color-name").innerHTML = " Teal";
  document.getElementById("actual-price").innerHTML =" 44.99";
  document.getElementById("discount-price").innerHTML =" 33.75";
  document.getElementById("color-id").innerHTML =" Teal";
  document.getElementById("color-price").innerHTML = " 33.75";
}

function colorFunction7() {
  document.getElementById("color-name").innerHTML = " Grey";
  document.getElementById("actual-price").innerHTML =" 31.99";
  document.getElementById("discount-price").innerHTML =" 23.99";
  document.getElementById("color-id").innerHTML =" Blue";
  document.getElementById("color-price").innerHTML = " 23.99";
}

function colorFunction8() {
  document.getElementById("color-name").innerHTML = " Light-grey";
  document.getElementById("actual-price").innerHTML =" 33.99";
  document.getElementById("discount-price").innerHTML =" 25.5";
  document.getElementById("color-id").innerHTML =" Light-grey";
  document.getElementById("color-price").innerHTML = " 25.5";
}
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


//Reabling minus button from click event of plus button
const subtractBtn = document.getElementById("subtract");
const quantityValue = document.getElementById("quantity")
const addBtn = document.getElementById("add");

subtractBtn.disabled = true;

addBtn.onclick = function() {
  subtractBtn.disabled = false;
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