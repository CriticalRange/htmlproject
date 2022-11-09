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


let newResult;


document.getElementById("calcButton1").onclick = function() {
    let oldResult = document.getElementById("calcResult").textContent;
    newResult = oldResult.slice(oldResult.indexOf(" ") + 1) + 1;
    document.getElementById("calcResult").innerHTML = "Result: " + newResult;
    calcbutton1()
}
console.log(calcbutton1());