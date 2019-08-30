const choiceTemplateSource = document.querySelector('.choicesTemplate').innerHTML;
const totalTemplateSource = document.querySelector('.totalTemplate').innerHTML;
const basketTemplateSource = document.querySelector('.basketTemplate').innerHTML;

const choiceTemplate = Handlebars.compile(choiceTemplateSource);
const totalTemplate = Handlebars.compile(totalTemplateSource);
const basketTemplate = Handlebars.compile(basketTemplateSource);

const addToBasket = document.querySelector('.addToBasket');
const message = document.querySelector('.message');
const toppingChoice = document.querySelectorAll('.toppingChoice');

const displayData = document.querySelector('.displayData');
const displayOrder = document.querySelector('.displayOrder');
const displayBasket = document.querySelector('.displayBasket');

const iceCreamInstance = IceCreamManager();

window.onload = () => {
    addToBasket.style.display = 'none';
    message.style.display = 'none';
};

displayBasket.addEventListener('click', () => {
    iceCreamInstance.clear();
    displayData.innerHTML = '';
    addToBasket.style.display = 'none';
    message.style.display = 'none';
    buildBasket();
});

displayOrder.addEventListener('click', () => {
    list = [];
    addToBasket.style.display = 'none';
    message.style.display = 'none';
    iceCreamInstance.clear();
    const flavours = iceCreamInstance.flavoursList();
    const containers = iceCreamInstance.containersList();
    const toppings = iceCreamInstance.toppingsList();

    let HTML = choiceTemplate({ flavours, containers, toppings });
    displayData.innerHTML = HTML;
    loadTotal(iceCreamInstance.returnTotal());

    flavourDrop = document.querySelector('.flavourDrop');
    containerDrop = document.querySelector('.containerDrop');

    flavourDrop.onchange = () => {
        iceCreamInstance.addFlavour(flavourDrop.value);
        loadTotal(iceCreamInstance.returnTotal());
        enableButton();
    };

    containerDrop.onchange = () => {
        iceCreamInstance.addContainer(containerDrop.value);
        loadTotal(iceCreamInstance.returnTotal());
        enableButton();
    };

    addToppings = () => {
        list = [];
        const toppingsChoice = document.querySelectorAll('input[name="toppingChoice"]:checked');
        for (let item of toppingsChoice) {
            list.push(item.value);
        }
        iceCreamInstance.addToppings(list);
        loadTotal(iceCreamInstance.returnTotal());
    }
});

const enableButton = () => {
    if (flavourDrop.value != 'Flavour' && containerDrop.value != 'Container') {
        addToBasket.style.display = '';
    } else {
        addToBasket.style.display = 'none';
    }
}

addToBasket.addEventListener('click', () => {
    message.style.display = '';
    setTimeout(() => {
        message.style.display = 'none';
    }, 2500);
    let item = {
        flavour: flavourDrop.value,
        container: containerDrop.value,
        toppings: list,
        total: iceCreamInstance.returnTotal()
    };
    list = [];
    iceCreamInstance.addToBasket(item);
});


const loadTotal = (total) => {
    totalDisplay = document.querySelector('.displayTotal');
    totalDisplay.style.display = '';

    const HTML = totalTemplate({ total });
    totalDisplay.innerHTML = HTML;
};

const buildBasket = () => {
    totalDisplay = document.querySelector('.displayTotal');
    totalDisplay.style.display = 'none';

    const basketData = iceCreamInstance.returnBasket();
    const HTML = basketTemplate({ items: basketData, total: iceCreamInstance.returnBasketTotal() });
    displayData.innerHTML = HTML;
};

