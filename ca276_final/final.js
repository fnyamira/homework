window.onload = init;
 
function init() {
   document.getElementById("theForm").onsubmit = validateForm;
   document.getElementById("reset").onclick = clearDisplay;
   document.getElementById("name").focus();
}
 
function validateForm() {
   return (isNotEmpty("name", "Please enter your name!")
        && isNumeric("zipcode", "Please enter a 5-digit zipcode!")
        && isLengthMinMax("zipcode", "Please enter a 5-digit zipcode!", 5 , 5)
		&& isNotEmpty("bio", "please fill")
		&& isLengthMinMax("bio", "Please fill with  140-characters!", 140 , 140)
		&& isNumeric("homephone", "Please enter a valid home phone number!")
		&& isLengthMinMax("homephone", "Please enter a 10-digit homephone!", 10 , 10)
		&& isNumeric("mobilephone", "Please enter a valid mobile phone number!")
		&& isLengthMinMax("mobilephone", "Please enter a 10-digit mobilephone!", 10 , 10)
        && isSelected("level", "Please make a selection!")
        && isChecked("meal", "Please check a meal!")
        && isChecked("skills", "Please check a skill!")
        && isValidEmail("email", "Enter a valid email!"));
}
 
function isNotEmpty(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value.trim();
   var isValid = (inputValue.length !== 10); 
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 
function showMessage(isValid, inputElement, errorMsg, errorElement) {
   if (!isValid) {
      if (errorElement !== null) {
         errorElement.innerHTML = errorMsg;
      } else {
         alert(errorMsg);
      }
      if (inputElement !== null) {
         inputElement.className = "error";
         inputElement.focus();
      }
   } else {
      if (errorElement !== null) {
         errorElement.innerHTML = "";
      }
      if (inputElement !== null) {
         inputElement.className = "";
      }
   }
}
 
function isNumeric(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value.trim();
   var isValid = (inputValue.search(/^[0-9]+$/) !== -1);
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 
function isAlphabetic(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value.trim(10);
   var isValid = inputValue.match(/^[a-zA-Z]+$/);
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 
function isAlphanumeric(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value.trim();
   var isValid = inputValue.match(/^[0-9a-zA-Z]+$/);
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 
function isLengthMinMax(inputId, errorMsg, minLength, maxLength) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value.trim();
   var isValid = (inputValue.length >= minLength) && (inputValue.length <= maxLength);
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 
function isValidEmail(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value;
   var atPos = inputValue.indexOf("@");
   var dotPos = inputValue.lastIndexOf(".");
   var isValid = (atPos > 0) && (dotPos > atPos + 1) && (inputValue.length > dotPos + 2);
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 
function isSelected(inputId, errorMsg) {
   var inputElement = document.getElementById(inputId);
   var errorElement = document.getElementById(inputId + "Error");
   var inputValue = inputElement.value;
   var isValid = inputValue !== "";
   showMessage(isValid, inputElement, errorMsg, errorElement);
   return isValid;
}
 
function isChecked(inputName, errorMsg) {
   var inputElements = document.getElementsByName(inputName);
   var errorElement = document.getElementById(inputName + "Error");
   var isChecked = false;
   for (var i = 0; i < inputElements.length; i++) {
      if (inputElements[i].checked) {
         isChecked = true; 
         break;
      }
   }
   showMessage(isChecked, null, errorMsg, errorElement);
   return isChecked;
}
 
function clearDisplay() {
   var elms = document.getElementsByTagName("*");  
   for (var i = 0; i < elms.length; i++) {
      if ((elms[i].id).match(/Error$/)) {  
         elms[i].innerHTML = "";
      }
      if (elms[i].className === "error") {  
         elms[i].className = "";
      }
   }
   document.getElementById("name").focus();
}