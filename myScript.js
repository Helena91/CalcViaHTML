var screenResult = "";
var leftOperand = "";
var operator = -1;
var rightOperand = "";

var onLeftOperand = true;

function myFunc(x) {
  var z;
  // if x is a number, then store it into y
//   console.log("The value of x is: " + x + " , and the type of this value is " + typeof(x));
  
  if (x === '+' || x === '-' || x === '/' || x === '*' || x === "clear") {
    onLeftOperand = false;
    console.log("The value of x is a string and it is: " + x);
    screenResult = screenResult + x;
    switch(x) {
      case '+': 
        operator = 1;
        break;
      case '-':
        operator = 2;
        break;
      case '/':
        operator = 3;
        break;
      case '*':
        operator = 4;
        break;
      case '=':
        operator = 5;
        break; 
      case 'clear':
        console.log("inside clear");
        screenResult = "";
        leftOperand = "";
        operator = -1;
        rightOperand = ""
        onLeftOperand = true;
        document.getElementById("results").innerHTML = "Results";
        break;
    }
  } else if (typeof(x) === 'number') {
    if (onLeftOperand) {
      var tempLeftOperand = leftOperand + "" + x;
      leftOperand = parseInt(tempLeftOperand, 10);
      screenResult = "" + leftOperand;
      document.getElementById("results").innerHTML = screenResult;
    } else {
      var tempRightOperand = rightOperand + "" + x;
      rightOperand = parseInt(tempRightOperand, 10);
      screenResult = "" + rightOperand;
      document.getElementById("results").innerHTML = screenResult;
    }
    // console.log("The value of x is a number and it is: " + x);
  } else {
    if (leftOperand != "" && rightOperand != "") {
      var tempResults;
      switch(operator) {
        case 1:
          tempResults = leftOperand + rightOperand;
          console.log("tempResults is: " + tempResults);
          break;
        case 2:
          tempResults = leftOperand - rightOperand;
          console.log("tempResults is: " + tempResults);
          break;
        case 3:
          tempResults = leftOperand / rightOperand;
          console.log("tempResults is: " + tempResults);
          break;
        case 4:
          tempResults = leftOperand * rightOperand;
          console.log("tempResults is: " + tempResults);
          break;
      } 
      screenResult = tempResults

      document.getElementById("results").innerHTML = screenResult;
    }
  }
}


// document.write(document.getElementById("results").innerHTML);
// document.write(document.getElementById("operator").innerHTML);
// document.write(document.getElementById("operand").innerHTML);