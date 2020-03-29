function checkExistDomElement (element) {
  for (let i = 0; i < element.length; i++) {
    if (!document.getElementById(element[i])) {
      console.log("Element with ID '" + element[i] + "' not found")
      return false
    }
  }
  return true
}

function calculation () {
  const elementArray = ['coefficient_a', 'coefficient_b', 'coefficient_c', 'result_D', 'result_case', 'result']
  if (!checkExistDomElement(elementArray)) {
    return
  }
  const a = document.getElementById('coefficient_a').value
  const b = document.getElementById('coefficient_b').value
  const c = document.getElementById('coefficient_c').value
  const D = discriminant(a, b, c)
  document.getElementById('result_D').innerHTML = D
  if (isNaN(a) || isNaN(b) || isNaN(c) === true) {
    alert('Вводить можно только числа!')
    location.reload()
  } else if (D < 0) {
    showResult('Нет действительных корней.')
  } else if (D === 0) {
    showResult("Один действительный корень: <br><span class='formula'>x</span> =  " + (-b/ (2 * a)))
  } else {
    showResult("Два действительных корня: <br><span class='formula'>x<sub>1</sub></span> =  " + (-b - Math.sqrt(D)) / (2 * a) +
                "<br><span class='formula'>x<sub>2</sub></span> =  " + (-b + Math.sqrt(D)) / (2 * a))
  }
}

function discriminant (a, b, c) {
  return b * b - 4 * a * c
}

function showResult (result) {
  document.getElementById('result_case').innerHTML = result
  document.getElementById('result').style.display = 'block'
}
