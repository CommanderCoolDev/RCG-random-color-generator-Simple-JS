const currentColor = document.querySelector('.current-collor');
const bodyElem = document.querySelector('body');
const generateBtn = document.querySelector('.generate-btn');

bodyElem.style.backgroundColor = currentColor.innerText;
generateBtn.addEventListener('click', () => {
    let randomColor = '';
    let chaaracters = '0123456789abcdef';

    for (let i=0; i < 6; i+=1) {
        randomColor = randomColor + chaaracters[Math.floor(Math.random() * 16)];

    }

    currentColor.innerText = "#" + randomColor;
    bodyElem.style.backgroundColor = "#" + randomColor;
})