const buttons = document.querySelectorAll('.big-five-button');
const spottedAnimalsList = document.querySelector('#spotted-animals-list');
const removeFirstItemButton = document.querySelector('#remove-first-item-button');
const removeAllItemsButton = document.querySelector('#remove-all-button');
const handleButtonClickEvent = e => {
    const newLI = document.createElement('li');
    newLI.innerHTML = e.target.innerHTML;
    newLI.className = 'spotted-animals-list-item';
    spottedAnimalsList.appendChild(newLI);
};

const handleRemoveFirstButtonClickEvent = e => spottedAnimalsList.removeChild(document.querySelector('.spotted-animals-list-item'));

const handleRemoveAllButtonClickEvent = e => {
    const spottedAnimalsListItems = document.querySelectorAll('.spotted-animals-list-item');
    spottedAnimalsListItems.forEach(item => spottedAnimalsList.removeChild(item));
};

buttons.forEach(button => button.addEventListener('click', handleButtonClickEvent));
removeFirstItemButton.addEventListener('click', handleRemoveFirstButtonClickEvent);
removeAllItemsButton.addEventListener('click', handleRemoveAllButtonClickEvent);