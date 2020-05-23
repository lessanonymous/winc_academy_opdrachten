// get HTML elements from DOM
const filterButtons = document.querySelectorAll('.filter');
const main = document.querySelector('main');
// function for retrieving data
const getData = dataType => {
    const countriesObject = {};
    switch (dataType) {
        case 'landen':
            return [...new Set(randomPersonData.map(person => person.region))].sort();
        case 'steenbokvrouwen':
            return randomPersonData.filter(person => {
                const day = Number(person.birthday.dmy.split('/')[0]), month = Number(person.birthday.dmy.split('/')[1]);
                if (person.name === "Алла") person.name = 'Aлла';
                return person.gender === 'female' && person.age >= 30 && ((month === 12 && day >= 22) || (month === 1 && day <= 19));
            }).sort((person, otherPerson) => person.name.localeCompare(otherPerson.name));
        case 'oude-creditcards':
            const currentMonth = new Date().getMonth() + 1, currentYear = Number(new Date().getFullYear().toString().slice(2));
            return randomPersonData.filter(person => {
                return (Number(person.credit_card.expiration.split('/')[1]) === currentYear
                    && Number(person.credit_card.expiration.split('/')[0]) > currentMonth)
                    || Number(person.credit_card.expiration.split('/')[1]) === currentYear + 1;
            });
        case 'meeste-mensen':
            const countries = randomPersonData.map(person => person.region);
            countries.forEach(country => countriesObject[country] ? countriesObject[country] += 1 : countriesObject[country] = 1);
            return Object.entries(countriesObject).sort((country, otherCountry) => otherCountry[1] - country[1]);
        case 'gemiddelde-leeftijd':
            randomPersonData.forEach(person => {
                if (countriesObject[person.region]) {
                    countriesObject[person.region].numberOfPeople += 1;
                    countriesObject[person.region].averageAge += person.age;
                } else {
                    countriesObject[person.region] = { numberOfPeople: 1, averageAge: person.age };
                }
            });
            for (const country in countriesObject) {
                countriesObject[country].averageAge = Math.round(countriesObject[country].averageAge / countriesObject[country].numberOfPeople);
            }
            return Object.entries(countriesObject);
    }
};
console.log(getData('gemiddelde-leeftijd'));
// function for creating elements
const createElements = (title, dataType, data) => {
    const titleElement = document.createElement('h1');
    titleElement.textContent = title;
    const list = document.createElement('ul');
    switch (dataType) {
        case 'landen':
            data.forEach(country => {
                const li = document.createElement('li');
                li.textContent = country;
                list.appendChild(li);
            });
            break;
        case 'steenbokvrouwen':
            data.forEach(female => {
                const li = document.createElement('li');
                li.innerHTML = `${female.name} ${female.surname} <a href=${female.photo}>Link to Photo</a>`;
                list.appendChild(li);
            });
            break;
        case 'oude-creditcards':
            data.forEach(person => {
                const li = document.createElement('li');
                li.innerHTML = `<p>${person.name} ${person.surname}</p><p>${person.phone}</p><p>${person.credit_card.number}</p><p>${person.credit_card.expiration}</p>`
                list.appendChild(li);
            });
            break;
        case 'meeste-mensen':
            data.forEach(country => {
                const li = document.createElement('li');
                li.textContent = `${country[0]}: ${country[1]}`;
                list.appendChild(li);
            });
            break;
        case 'gemiddelde-leeftijd':
            data.forEach(country => {
                const li = document.createElement('li');
                li.innerHTML = `<button class="average-toggle">${country[0]}</button><p class="hidden">De gemiddelde persoon in ${country[0]} is ${country[1].averageAge} oud</p>`;
                list.appendChild(li);
            });
    }
    return [titleElement, list];
};
// eventhandlers
const handleFilterButtonClickEvent = e => {
    main.innerHTML = '';
    const dataType = e.target.textContent.toLowerCase().replace(' ', '-');
    const data = getData(dataType);
    const elements = createElements(e.target.textContent, dataType, data);
    elements.forEach(element => main.appendChild(element));
    if (dataType === 'gemiddelde-leeftijd') {
        document.querySelectorAll('.average-toggle').forEach(button => button.addEventListener('click', handleAverageToggleButtonClickEvent));
    }
};
const handleAverageToggleButtonClickEvent = e => {
    e.target.nextElementSibling.className = '';
};
// adding eventhandlers
filterButtons.forEach(button => button.addEventListener('click', handleFilterButtonClickEvent));