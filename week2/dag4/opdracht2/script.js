const addButtons = document.querySelectorAll('.big-five-button');
const spottedAnimalsList = document.querySelector('#spotted-animals-list');
const removeFirstItemButton = document.querySelector('#remove-first-item-button');
const removeAllItemsButton = document.querySelector('#remove-all-button');
const handleAddButtonClickEvent = e => {
    const newLI = document.createElement('li');
    newLI.innerHTML = e.target.innerHTML;
    newLI.className = 'spotted-animals-list-item';
    spottedAnimalsList.appendChild(newLI);
};

const handleRemoveFirstButtonClickEvent = e => {
    const spottedAnimalsListItems = document.querySelectorAll('.spotted-animals-list-item');
    if (spottedAnimalsListItems.length) spottedAnimalsList.removeChild(document.querySelector('.spotted-animals-list-item'));
};

const handleRemoveAllButtonClickEvent = e => {
    const spottedAnimalsListItems = document.querySelectorAll('.spotted-animals-list-item');
    spottedAnimalsListItems.forEach(item => spottedAnimalsList.removeChild(item));
};

addButtons.forEach(button => button.addEventListener('click', handleAddButtonClickEvent));
removeFirstItemButton.addEventListener('click', handleRemoveFirstButtonClickEvent);
removeAllItemsButton.addEventListener('click', handleRemoveAllButtonClickEvent);