let textArea = document.querySelector('.text__input');
let btn = document.querySelector('.btn');
let outputArea = document.querySelector('.text__output');
let sreverURL = 'https://api.funtranslations.com/translate/pirate.json';

const getCompleteURL = (url) => `${url}?text=${textArea.value}`;

const buttonPressed = (url) => {
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => (outputArea.innerText = data.contents.translated))
    .catch((err) => console.log(`error: ${err}`));
};

btn.addEventListener('click', () => {
  buttonPressed(getCompleteURL(sreverURL));
});

// btn.addEventListener('click', buttonPressed);
