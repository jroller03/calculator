function add(num1, num2){
return num1+ num2;
}

function subtract(num1, num2){
  return num1 - num2;
}

function multiply(num1, num2){
  return num1 * num2;
}

function divide(num1, num2){
  return num1 / num2;
}

var num1 = parseInt(prompt("Enter a number please"));
var num2 = parseInt(prompt("Enter another number please"));
alert(add(num1,num2));
alert(subtract(num1, num2));
alert(multiply(num1, num2));
alert(divide(num1, num2));
