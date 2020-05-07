const button = document.querySelector('#my-button');
const bgButton = document.querySelector('#toggle-bg');

button.addEventListener('click', e => alert('button clicked'));

const toggleBG = e => document.body.classList.toggle('red-background');

bgButton.addEventListener('click', toggleBG);