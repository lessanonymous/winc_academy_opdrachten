// helper for creating new elements
const createElement = (data, elementType) => {
    const element = document.createElement(elementType);
    data.title ? element.textContent = data.title : element.textContent = `Genre naam: ${data.name}, id: ${data.id}`;
    return element;
};
// helper for adding elements to DOM
const addElementsToDOM = async (dataType) => {
    const data = await getData(dataType);
    if (Array.isArray(data)) {
        data.forEach(pieceOfData => document.querySelector(`.${dataType}-list`).appendChild(createElement(pieceOfData, 'li')));
    } else {
        document.body.insertBefore(createElement(data, 'p'), document.querySelector('.top-rated'));
    }
};
// adding all elements to DOM
addElementsToDOM('genres');
addElementsToDOM('top-movie');
addElementsToDOM('top-rated-movies');
addElementsToDOM('top-rated-action-movies');
addElementsToDOM('movies-from-1975');