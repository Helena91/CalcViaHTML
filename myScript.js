var y;

function myFunc(x) {
  var z;
  // if x is a number, then store it into y
  console.log("The value of x is: " + x + " , and the type of this value is " + typeof(x));

  if (parseInt(x, 10) != NaN) {
    document.getElementById("results").innerHTML = x;
  }
// else, then it is an operator
else {
if(y == "+"){
	z = x + y;
	document.getElementById("operator").innerHTML;
}
else if (y == "-"){}
else if (y == "*"){}
else if (y == "/"){}
// then it is a number or asking for results
else {
    //document.getElementById("results").innerHTML = x;
if (y == "=") {}
}
}
}


document.write(document.getElementById("results").innerHTML);
document.write(document.getElementById("operator").innerHTML);
document.write(document.getElementById("operand").innerHTML);