function showResult(string) {
    if (document.getElementById("resultSting")) {
        document.getElementById("resultSting").innerHTML = 'You clicked ' + string + ' button' ;
    }
}

main.onclick = function(event) {
    let button = event.target.closest('button');
    if (!button) return;
    if (!main.contains(button)) return;
    showResult(event.target.innerHTML);
};