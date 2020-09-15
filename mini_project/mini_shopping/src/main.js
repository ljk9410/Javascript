

//Fetch the items from the JSON file
function loadItems() {
    return fetch('../data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

//Update the list with the given items
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}


//Create HTML list item from the given data item
function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}


//Create Event Listner
function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    console.log(key, value);
    if(key === null || value === null)
        return;

    const filtered = items.filter(item => item[key] === value);
    displayItems(filtered);
}

function setEventListners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
}

//main
loadItems()
.then(items => {
    displayItems(items);
    setEventListners(items);
})
.catch(console.log)