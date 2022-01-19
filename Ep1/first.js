function getName(id) {
  var Number1 = document.getElementById("t1").value;
  var Number2 = document.getElementById(id).value;

  var n1 = parseInt(Number1);
  var n2 = parseInt(Number2);

  document.getElementById("t3").value = n1 + n2;
}

$(document).ready(function () {
  console.log("55");
});
