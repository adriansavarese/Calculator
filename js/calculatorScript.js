let numberStringOne = ""
let numberStringOneToInt = 0
let numberStringTwoToInt = 0
let eqResultBoolean = false
let finalOperation = ""


function captureNumber(numero) {
    numberStringOne = numberStringOne + numero
    numberStringOneToInt = parseFloat(numberStringOne)
    totalresult.innerHTML = numberStringOne
}


function operationNumber(operationId) {
    
    if (operationId =="/" || operationId =="x" || operationId =="-" || operationId =="+") {
    subresult.innerHTML = numberStringOne + operationId;
    numberStringTwoToInt = numberStringOneToInt;
    numberStringOneToInt = 0;
    numberStringOne = "";
    finalOperation = operationId;
    }

    if (operationId == "clearAll") {
        numberStringOneToInt = 0;
        numberStringTwoToInt = 0;
        numberStringOne = "";
        totalresult.innerHTML = numberStringOneToInt;
        subresult.innerHTML = numberStringOneToInt;
    }

    if(operationId =="eqResult") {
        numberStringOne = String (numberStringOneToInt);
        var numberStringTwo = String (numberStringTwoToInt);
        subresult.innerHTML = numberStringTwoToInt + finalOperation + numberStringOneToInt;        
        if (finalOperation == "+") {
                numberStringTwoToInt = numberStringTwoToInt + numberStringOneToInt;
                totalresult.innerHTML = numberStringTwoToInt;
            } else if (finalOperation =="-") {
                numberStringTwoToInt = numberStringTwoToInt - numberStringOneToInt;
                totalresult.innerHTML = numberStringTwoToInt;
            } else if (finalOperation =="x") {
                numberStringTwoToInt = numberStringTwoToInt * numberStringOneToInt;
                totalresult.innerHTML = numberStringTwoToInt;
            } else if (finalOperation =="/") {
                numberStringTwoToInt = numberStringTwoToInt / numberStringOneToInt;
                totalresult.innerHTML = numberStringTwoToInt;
            } else {
                alert("Ups, error");
            }
    }       
        
    
}