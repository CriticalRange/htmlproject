let userName;
document.getElementById("submit").onclick = function () {
userName = document.getElementById("nameInput").value;
document.getElementById("nameResult").innerHTML = "Your name is: " + userName;
}

let firstSideValue;
let secondSideValue;
let hypotenuse;
document.getElementById("hypotenuseCalculation").onclick = function () {
    firstSideValue = Number(document.getElementById("firstSide").value);
    secondSideValue = Number(document.getElementById("secondSide").value);
    hypotenuse = Math.sqrt(Math.pow(firstSideValue, 2) + Math.pow(secondSideValue, 2));
    document.getElementById("hypotenuseResult").innerHTML = "Your hypotenuse calculation is: " + hypotenuse;
}

let count = 0;
document.getElementById("increase").onclick = function () {
    count += 1;
    document.getElementById("counted").innerHTML = count;
}
document.getElementById("decrease").onclick = function () {
    count -= 1;
    document.getElementById("counted").innerHTML = count;
}
document.getElementById("reset").onclick = function () {
    count = 0;
    document.getElementById("counted").innerHTML = count;
}





document.getElementById("hundred").onclick = function () {
    let randomizerHundred = Math.floor(Math.random() * 100) + 1;
    document.getElementById("randomizerResult").innerHTML = "Result: " + randomizerHundred;
}
document.getElementById("thousand").onclick = function () {
    let randomizerThousand = Math.floor(Math.random() * 1000) + 1;
    document.getElementById("randomizerResult").innerHTML = "Result: " + randomizerThousand;
}
document.getElementById("tenThousand").onclick = function () {
    let randomizerTenThousand = Math.floor(Math.random() * 10000) + 1;
    document.getElementById("randomizerResult").innerHTML = "Result: " + randomizerTenThousand;
}

let guessGameRandomizer = Math.floor(Math.random() * 30) + 1;
document.getElementById("guessGameButton").onclick = function() {
    
    
    userGuess = Number(document.getElementById("userGuess").value);
    if (userGuess == guessGameRandomizer) {
        document.getElementById("guessGameResult").innerHTML = "Result: You win!";
    }
    else if (userGuess < guessGameRandomizer) {
        document.getElementById("guessGameResult").innerHTML = "Result: A bit higher!"
    }
    else if (userGuess > guessGameRandomizer) {
        document.getElementById("guessGameResult").innerHTML = "Result: A little less lower!"
    }
    else {
        document.getElementById("guessGameResult").innerHTML = "Result: You didn/'t type a number";
    }
}

let tempInput;
let celciusIcon = String.fromCharCode(176);
let fahrenheitIcon = String.fromCharCode(176) + "F";
document.getElementById("tempConvertButton").onclick = function() {
    if (document.getElementById("celciusButton").checked) {
        tempInput = document.getElementById("tempInput").value;
        tempInput = ((tempInput -32) * 5 / 9).toPrecision(2);
        document.getElementById("tempResult").innerHTML = tempInput + celciusIcon;
    }
    else if (document.getElementById("fahrenheitButton").checked) {
        tempInput = document.getElementById("tempInput").value;
        tempInput = tempInput * 9 / 5 + 32;
        document.getElementById("tempResult").innerHTML = tempInput + fahrenheitIcon;
    }
}