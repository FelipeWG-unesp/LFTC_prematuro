const stringRegex = document.createElement('input');
document.body.appendChild(stringRegex);

const buttonRegex = document.createElement('button');
buttonRegex.textContent = 'Definir Regex';
document.body.appendChild(buttonRegex);

const stringTest = document.createElement('input');
document.body.appendChild(stringTest);

const button = document.createElement('button');
button.textContent = 'Testar';
document.body.appendChild(button);

const resultDiv = document.createElement('div');
document.body.appendChild(resultDiv);

const stringTest2 = document.createElement('input');
document.body.appendChild(stringTest2);

const button2 = document.createElement('button');
button2.textContent = 'Testar';
document.body.appendChild(button2);

const resultDiv2 = document.createElement('div');
document.body.appendChild(resultDiv2);

let regex;

buttonRegex.addEventListener('click', () => {
    const inputValue = stringRegex.value;
    regex = new RegExp(inputValue);
});

button.addEventListener('click', () => {
    const inputValue = stringTest.value;
    const isValid = regex.test(inputValue);
    resultDiv.textContent = `O resultado do teste é: ${isValid}`;
});

button2.addEventListener('click', () => {
    const inputValue = stringTest2.value;
    const isValid = regex.test(inputValue);
    resultDiv2.textContent = `O resultado do teste é: ${isValid}`;
});
