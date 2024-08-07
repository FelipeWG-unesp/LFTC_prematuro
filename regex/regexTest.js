//Input do regex
const stringRegex = document.createElement('input');
document.body.appendChild(stringRegex);

const buttonRegex = document.createElement('button');
buttonRegex.textContent = 'Definir Regex';
document.body.appendChild(buttonRegex);

const divSpace = document.createElement('div');
document.body.appendChild(divSpace);

//Input do teste 1
const divTest = document.createElement('div');
divTest.style.display = 'none'; // Adiciona a propriedade display: none
document.body.appendChild(divTest);

const stringTest = document.createElement('input');
divTest.appendChild(stringTest);

const button = document.createElement('button');
button.textContent = 'Testar';
divTest.appendChild(button);

const resultDiv = document.createElement('div');
divTest.appendChild(resultDiv);

//Input do teste 2
const divTest2 = document.createElement('div');
divTest2.style.display = 'none'; // Adiciona a propriedade display: none
document.body.appendChild(divTest2);

const stringTest2 = document.createElement('input');
divTest2.appendChild(stringTest2);

const button2 = document.createElement('button');
button2.textContent = 'Testar';
divTest2.appendChild(button2);

const resultDiv2 = document.createElement('div');
divTest2.appendChild(resultDiv2);

let regex;

//Botões
buttonRegex.addEventListener('click', () => {
    const inputValue = stringRegex.value;
    regex = new RegExp(inputValue);
    divTest.style.display = 'block'; // Altera a propriedade display para block
    divTest2.style.display = 'block'; // Altera a propriedade display para block
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
