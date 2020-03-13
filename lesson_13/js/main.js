function calculation() {
    let a = document.getElementById("coefficient_a").value;
    let b = document.getElementById("coefficient_b").value;
    let c = document.getElementById("coefficient_c").value;
    let D = discriminant(a, b, c);

    document.getElementById("result_D").innerHTML = D;
    switch (true) {
        case isNaN(a) || isNaN(b) || isNaN(c) == true:
            alert("Вводить можно только числа!");
            location.reload();
            break;
        case D < 0:
            document.getElementById("result_case").innerHTML = "Нет действительных корней.";
            showResult();
            break;
        case D == 0:
            document.getElementById("result_case").innerHTML = "Один действительный корень: " + (-b / (2 * a));
            showResult();
            break;
        default:
            document.getElementById("result_case").innerHTML =
                "Два действительных корня: <br><span class='formula'>x<sub>1</sub></span> =  " + (-b - Math.sqrt(D)) / (2 * a) +
                "<br><span class='formula'>x<sub>2</sub></span> =  " + (-b + Math.sqrt(D)) / (2 * a);
            showResult();
            break;
    }
}

function discriminant(a, b, c) {
    return b * b - 4 * a * c;
}

function showResult() {
    document.getElementById("result").style.display = "block";
}