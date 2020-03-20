function promptNumber(inputText) {
    let inputVariable;
    do {
        inputVariable = Number(prompt(inputText, 0));
        if (isNaN(inputVariable)) {
            alert("Only numbers allowed to enter!");
        }
    }
    while (isNaN(inputVariable));
    return inputVariable;
}

function showResult(result) {
    if (document.querySelector("#result h2")) {
        document.querySelector("#result h2").innerHTML = result;
    }
}

function userPromptMathPow() {
    let x = promptNumber("Enter the number you want to raise to the power:");
    let n = promptNumber("Enter the degree to which you want to raise the entered number:");
    let result = Math.pow(x, n);
    if (isNaN(result)) {
        result = " ERROR! You have probably tried to raise a negative number to an integer power.";
    }
    let resultString = "Result of x = " + x + " in power of n = " + n + " equals " + result;
    showResult(resultString);
    alert(resultString);
}

userPromptMathPow();
