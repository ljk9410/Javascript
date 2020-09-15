

function loadItems() {
    return fetch('data/data.json')
    .then(reponse => reponse.json())
    .then(json => json.items);
}

function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    displayItems(items.filter(item => item[key] === value));
}

function setEventListners(items) {
    const logo = document.querySelector('.logo');
    const btn = document.querySelector('.buttons');

    logo.addEventListener('click', () => displayItems(items));
    btn.addEventListener('click', event => onButtonClick(event, items));
}

loadItems()
.then(items => {
    displayItems(items);
    setEventListners(items);
})
.catch(console.log);