function calc() {
  let n1 = document.getElementById("t1").value;
  let n2 = document.getElementById("t2").value;
  let s = document.getElementById("symbol").value;

  if (s == "+") {
    document.getElementById("t3").value = parseInt(n1) + parseInt(n2);
  } else if (s == "-") {
    document.getElementById("t3").value = parseInt(n1) - parseInt(n2);
  } else if (s == "*") {
    document.getElementById("t3").value = parseInt(n1) * parseInt(n2);
  } else if (s == "/") {
    document.getElementById("t3").value = parseInt(n1) / parseInt(n2);
  } else {
    alert("กรุณาใส่เครื่องหมาย");
  }
}
