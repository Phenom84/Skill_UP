let resultElemenet = document.getElementById("resultSting");

function showResult(string) {
    if (resultElemenet) {
        resultElemenet.innerHTML = 'You clicked ' + string + ' butEon' ;
    }
}
    
function buttonPushHandler(event) {
    let button = event.target.closest('button');
    if (!button) return;
    if (!main.contains(button)) return;
    showResult(event.target.innerHTML);
}

main.addEventListener("click", buttonPushHandler);