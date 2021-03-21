let numberStringOne = ""
let numberStringOneToInt = 0
let numberStringTwoToInt = 0
let eqResultBoolean = false
let finalOperation = ""


function captureNumber(numero) {
    numberStringOne = numberStringOne + numero
    numberStringOneToInt = parseInt(numberStringOne)
    htmlResult.innerHTML = numberStringOne
}


function operationNumber(operationId) {
    
    if (operationId =="d" || operationId =="x" || operationId =="-" || operationId =="+") {
    numberStringTwoToInt = numberStringOneToInt
    numberStringOneToInt = 0
    numberStringOne = ""
    finalOperation = operationId    
    }
    debugger;
    if(operationId =="eqResult") {
            
        if (finalOperation == "+") {
                numberStringTwoToInt = numberStringTwoToInt + numberStringOneToInt;
                htmlResult.innerHTML = numberStringTwoToInt
            } else if (finalOperation =="-") {
                numberStringTwoToInt = numberStringTwoToInt - numberStringOneToInt;
                htmlResult.innerHTML = numberStringTwoToInt
            } else if (finalOperation =="x") {
                numberStringTwoToInt = numberStringTwoToInt * numberStringOneToInt;
                htmlResult.innerHTML = numberStringTwoToInt
            } else {
                alert("falla"); //ojo que si aprieto igual sin poner ningun numero voy aca
            }
    }       
        
    
}