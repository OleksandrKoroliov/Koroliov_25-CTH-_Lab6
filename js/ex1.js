console.log("Задача №1: З клавіатури вводиться текстовий рядок. Скласти скрипт, який замінює всі великі літери, на відповідні малі.");

function addJsScript(src) {
    let script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.appendChild(script);
}

let inputString = prompt("Введіть текстовий рядок:");

let outputString = "";

for (let i = 0; i < inputString.length; i++) {
  let currentChar = inputString[i];
  
  if (currentChar >= "A" && currentChar <= "Z") {
    let lowercaseChar = String.fromCharCode(currentChar.charCodeAt(0) + 32);
    outputString += lowercaseChar;
  } else {
    outputString += currentChar;
  }
}

console.log("Результат виконання скрипта:");
console.log(outputString);

for (let i = 1; i < 2; i++) {
  function ask(question, yes, no) {
      if (confirm(question)) yes()
      else no();
  }

  ask(
      'Ви хочете перейти до розв’язку наступної задачі?',
      function () { addJsScript('./js/ex2.js') },
  );
}