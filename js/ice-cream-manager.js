const IceCreamManager = () => {
    const basket = [];
    const flavours = [
        { flavour: 'Flavour', cost: 0 },
        { flavour: 'Vanilla', cost: 10 },
        { flavour: 'Chocolate', cost: 15 },
        { flavour: 'Strawberry', cost: 15 },
        { flavour: 'Bubblegum', cost: 14 },
        { flavour: 'Tinroof', cost: 21 },
    ];
    const containers = [
        { container: 'Container', cost: 0 },
        { container: 'Plain cone', cost: 5 },
        { container: 'Sugar cone', cost: 8 },
        { container: 'Paper cup', cost: 4 },
    ];
    const toppings = [
        { topping: 'Crumbled peanuts', cost: 6 },
        { topping: 'Caramal dip', cost: 4 },
        { topping: 'Chocolate Dip', cost: 3 },
        { topping: 'Smarties', cost: 9 },
        { topping: 'Oreos', cost: 7 },
        { topping: 'Astros', cost: 8 },
    ];
    let flavourCost = 0;
    let containerCost = 0;
    let toppingCost = 0;

    let grandTotal = 0;

    const addToBasket = (item) => {
        basket.push(item);
    };

    const returnBasket = () => { return basket; };

    const addFlavour = (flavour) => {
        const priceOf = flavours.find((item)=>{
            return item.flavour == flavour
        });
        flavourCost = priceOf.cost;
    };
    const addContainer = (container) => {
        const priceOf = containers.find((item)=>{
            return item.container == container
        });
        containerCost = priceOf.cost;
    };
    const addToppings = (toppingList) => {
        toppingCost = 0;
        for (let item of toppings) {
            for (let topping of toppingList) {
                if (topping === item.topping) {
                    toppingCost += item.cost
                }
            }
        }
    };
    const returnTotal = () => {
        grandTotal = toppingCost + flavourCost + containerCost;
        return grandTotal.toFixed(2);
    };
    const flavoursList = () => { return flavours; };
    const containersList = () => { return containers; };
    const toppingsList = () => { return toppings; };

    const returnBasketTotal = () => {
        let total = 0;
        for (let item of basket) {
            total += Number(item.total);
        }
        return total.toFixed(2);
    }

    const clear = () => {
        flavourCost = 0;
        containerCost = 0;
        toppingCost = 0;
        grandTotal = 0;
    };

    return {
        addFlavour,
        addContainer,
        addToppings,
        returnTotal,
        flavoursList,
        containersList,
        toppingsList,
        clear,
        addToBasket,
        returnBasket,
        returnBasketTotal
    }
};