function showResult(string) {
    if (document.getElementById("resultSting")) {
        document.getElementById("resultSting").innerHTML = string;
    }
}
secondButton.onclick = function () { showResult('You clicked Second button')};
thirdButton.addEventListener("click", function () { showResult('You clicked Third button')});