function printCompanyName(){
  document.getElementById("printCompanyName").innerHTML = companyName.value;
}
function printCompanyMessage(){
  document.getElementById("printCompanyMessage").innerHTML = companyMessage.value;
}

function printName(){
  document.getElementById("printName").innerHTML = nameUser.value;
}

function printJobTitle(){
  document.getElementById("printJobTitle").innerHTML = jobTitle.value;
}

function printEmail(){
  document.getElementById("printEmail").innerHTML = email.value;
}

function printNumber() {
  var idn = document.getElementById("indicative");
  var i = idn.selectedIndex;
  var pNumber = document.getElementById("phoneNumber").value;
  document.getElementById("printPhoneNumber").innerHTML = idn.options[i].text + pNumber;
}

function bgChange(){
  document.getElementById("cardInfo").style.background = inputBg.value;
}

function txtColorChange(){
  document.getElementById("printCompanyName").style.color = inputTxtColor.value;
  var x = document.getElementsByClassName('changeColorText');
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.color = inputTxtColor.value;
    
  }
}

function fontSize() {
  var inputValue = rangeSlider.value;
  document.getElementById("pixeles").innerHTML = inputValue + "px";
  var x = document.getElementsByClassName('changeColorText');
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.fontSize = inputValue + "px";
    
  }
}

function textAlign(este_id) {
  document.getElementById("card-preview").className = este_id + " col-12 col-md-6";
}

//Prevent reload when clicked button

var array_buttons = document.getElementsByTagName("BUTTON");

for (var i = 0; i < array_buttons.length; i++) {
 array_buttons[i].addEventListener('click',function(event){
   event.preventDefault();
 });
}

//Submit button
var input_data = document.getElementsByClassName("form-input");
var message_error_array = document.getElementsByClassName("message_error");
var i;
function submitButton(){
  for (var i = 0; i < input_data.length; i++) {
    if (input_data[i].value === "") {
      for (var ia = 0; ia < message_error_array.length; ia++) {
        message_error_array[i].innerHTML = "Field Required"; 
      }
    } else if (input_data[i].value != "") {
      for (var ia = 0; ia < message_error_array.length; ia++) {
        message_error_array[i].innerHTML = ""; 
      }
    }
   }
  }
document.getElementById("submit").addEventListener('click',submitButton);


function clear() {
  window.location.reload();
  alert("You can start Again");
}
  document.getElementById("clear").addEventListener('click',clear);
