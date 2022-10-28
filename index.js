let firstNumber = ''
let secondNumber = ''
let calculation = ''
let finish = 'false'


const out = document.querySelector(".screen");



function clearAll() {
  firstNumber = "";
  secondNumber = "";
  calculation = "";
  finish = ''
  out.textContent = 0
}


document.querySelector('#ac').onclick = clearAll

document.querySelector('.buttons').onclick() = (event) => {
  if(!event.target.classList.contains('btn')) return;
}

