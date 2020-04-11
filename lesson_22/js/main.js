let solveEquation = () => {
  const elementArray = ['coefficient_a', 'coefficient_b', 'coefficient_c', 'result_D', 'result_case', 'result']
  if (!checkExistDomElement(elementArray)) {
    return
  }
  
  const a = document.getElementById('coefficient_a').value
  const b = document.getElementById('coefficient_b').value
  const c = document.getElementById('coefficient_c').value
  const discriminant = getDiscriminant (a, b, c)

  document.getElementById('result_D').innerHTML = discriminant
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Вводить можно только числа!')
    location.reload()
  } else if (discriminant < 0) {
    showResult('Нет действительных корней.')
  } else if (discriminant === 0) {
    showResult(`Один действительный корень: <br><span class='formula'>x</span> = ${-b / (2 * a)}`)
  } else {
    showResult(`Два действительных корня: <br><span class='formula'>x<sub>1</sub></span> = ${(-b - Math.sqrt(discriminant)) / (2 * a)} 
    <br><span class='formula'>x<sub>2</sub></span> = ${(-b + Math.sqrt(discriminant)) / (2 * a)}`)
  }
}

let getDiscriminant =  (a, b, c) => b * b - 4 * a * c

let checkExistDomElement = (elementArray) => {
  for (let id of elementArray) {
    if (!document.getElementById(id)) {
      console.log("Element with ID '" + id + "' not found")
      return false
    }
  }
  return true
}

let showResult = (result) => {
  document.getElementById('result_case').innerHTML = result
  document.getElementById('result').style.display = 'block'
}
