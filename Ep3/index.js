var symbolL = "";
var n1 = 0;
var n2 = 0;

function updateN1(pass) {
  n1 = parseInt(pass);
}

function updateN_Enter(pass) {
  if (event.key === "Enter") {
    n2 = parseInt(pass.value);
    calc();
  } else {
    n2 = parseInt(pass.value);
  }

  //n2 = parseInt(pass);
}

function subtract(pass1) {
  symbolL = pass1;
}

function calc() {
  if (symbolL == "+") {
    document.getElementById("Result").value = n1 + n2;
  } else if (symbolL == "-") {
    document.getElementById("Result").value = n1 - n2;
  } else if (symbolL == "*") {
    document.getElementById("Result").value = n1 * n2;
  } else if (symbolL == "/") {
    document.getElementById("Result").value = n1 / n2;
  } else {
    alert("โปรดใส่เครื่องหมาย");
  }
}
