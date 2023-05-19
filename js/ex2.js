console.log("Задача №2: Обчислити степінь натурального числа рекурсивно.");

function addJsScript(src) {
  let script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.body.appendChild(script);
}

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    let result = base * power(base, exponent - 1);
    return result;
  }
}

let input = prompt("Введіть число і степінь (через пробіл):");
let inputArray = input.split(" ");
let base = parseInt(inputArray[0]);
let exponent = parseInt(inputArray[1]);

if (isNaN(base) || isNaN(exponent) || inputArray.length !== 2) {
  console.log("Введено некоректні дані.");
} else {
  let result = power(base, exponent);
  console.log(`${base} піднесене до степеня ${exponent} дорівнює ${result}.`);
}

for (let i = 1; i < 2; i++) {
  function ask(question, yes, no) {
      if (confirm(question)) yes()
      else no();
  }

  ask(
      'Ви хочете перейти до розв’язку наступної задачі?',
      function () { addJsScript('./js/ex3.js') },
  );
}