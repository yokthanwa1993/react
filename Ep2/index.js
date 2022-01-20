function Add() {
  let n1 = document.getElementById("t1").value;
  let n2 = document.getElementById("t2").value;
  document.getElementById("Result").value = parseInt(n1) + parseInt(n2);
}

function subtract() {
  let n1 = document.getElementById("t1").value;
  let n2 = document.getElementById("t2").value;
  document.getElementById("Result").value = parseInt(n1) - parseInt(n2);
}

function multiply() {
  let n1 = document.getElementById("t1").value;
  let n2 = document.getElementById("t2").value;
  document.getElementById("Result").value = parseInt(n1) * parseInt(n2);
}

function divide() {
  let n1 = document.getElementById("t1").value;
  let n2 = document.getElementById("t2").value;
  document.getElementById("Result").value = parseInt(n1) / parseInt(n2);
}
