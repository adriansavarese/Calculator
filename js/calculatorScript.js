let numberStringOne = ""
let numberStringOneToInt = 0
let numberStringTwoToInt = 0
let eqResultBoolean = false
let finalOperation = ""


function captureNumber(numero) {
    numberStringOne = numberStringOne + numero
    numberStringOneToInt = parseFloat(numberStringOne)
    htmlResult.innerHTML = numberStringOne
}


function operationNumber(operationId) {
    
    if (operationId =="d" || operationId =="x" || operationId =="-" || operationId =="+") {
    numberStringTwoToInt = numberStringOneToInt;
    numberStringOneToInt = 0;
    numberStringOne = "";
    finalOperation = operationId;
    }
    if (operationId == "clearAll") {
        numberStringOneToInt = 0;
        numberStringTwoToInt = 0;
        numberStringOne = "";
        htmlResult.innerHTML = numberStringOneToInt;
    }
    if(operationId =="eqResult") {
            
        if (finalOperation == "+") {
                numberStringTwoToInt = numberStringTwoToInt + numberStringOneToInt;
                htmlResult.innerHTML = numberStringTwoToInt;
            } else if (finalOperation =="-") {
                numberStringTwoToInt = numberStringTwoToInt - numberStringOneToInt;
                htmlResult.innerHTML = numberStringTwoToInt;
            } else if (finalOperation =="x") {
                numberStringTwoToInt = numberStringTwoToInt * numberStringOneToInt;
                htmlResult.innerHTML = numberStringTwoToInt;
            } else if (finalOperation =="d") {
                numberStringTwoToInt = numberStringTwoToInt / numberStringOneToInt;
                htmlResult.innerHTML = numberStringTwoToInt;
            } else {
                alert("Ups, error");
            }
    }       
        
    
}