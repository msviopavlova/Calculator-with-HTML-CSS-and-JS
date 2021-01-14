var add_button = document.getElementById("addition");
var subtract_button = document.getElementById("subtraction");
var multiply_button = document.getElementById("multiplication");
var divide_button = document.getElementById("division");

add_button.addEventListener("click", add);
subtract_button.addEventListener("click", subtract);
multiply_button.addEventListener("click", multiply);
divide_button.addEventListener("click", divide);

var result_field = document.getElementById("final_result");

function add() {
  var argument_one = document.getElementById("first_argument_input").value;

  var argument_two = document.getElementById("second_argument_input").value;

  var result = parseInt(argument_one) + parseInt(argument_two);
  result_field.innerHTML = result;
}

function subtract() {
  var argument_one = document.getElementById("first_argument_input").value;

  var argument_two = document.getElementById("second_argument_input").value;

  var result = parseInt(argument_one) - parseInt(argument_two);
  result_field.innerHTML = result;
}

function multiply() {
  var argument_one = document.getElementById("first_argument_input").value;

  var argument_two = document.getElementById("second_argument_input").value;

  var result = parseInt(argument_one) * parseInt(argument_two);
  result_field.innerHTML = result;
}

function divide() {
  var argument_one = document.getElementById("first_argument_input").value;

  var argument_two = document.getElementById("second_argument_input").value;

  var result = parseInt(argument_one) / parseInt(argument_two);
  result_field.innerHTML = result;
}
