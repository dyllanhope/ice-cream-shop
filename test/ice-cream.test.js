describe('Ice cream manager tests', () => {
    describe('Testing order totalling', () => {
        it('Should return a total of 0', () => {
            let instance = IceCreamManager();

            assert.equal(instance.returnTotal(), 0);
        });
        it('Should return a total of 35 with chocolate, plain cone with astros and oreos as toppings', () => {
            let instance = IceCreamManager();

            instance.addFlavour('Chocolate');
            instance.addContainer('Plain cone');
            instance.addToppings(['Astros', 'Oreos']);


            assert.equal(instance.returnTotal(), 35);
        });
        it('Should return a total of 0 after clearing data', () => {
            let instance = IceCreamManager();

            instance.addFlavour('Chocolate');
            instance.addContainer('Plain cone');
            instance.addToppings(['Astros', 'Oreos']);

            assert.equal(instance.returnTotal(), 35);

            instance.clear();
            assert.equal(instance.returnTotal(), 0);
        });
    });
    describe('Testing basket', () => {
        it('Should return an empty basket', () => {
            let instance = IceCreamManager();

            assert.deepEqual(instance.returnBasket(), []);
        });
        it('Should return a basket with 1 item', () => {
            let instance = IceCreamManager();

            instance.addToBasket({
                flavour: 'Chocolate',
                container: 'Plain cone',
                toppings: [],
                total: 20
            });

            assert.deepEqual(instance.returnBasket(), [
                {
                    flavour: 'Chocolate',
                    container: 'Plain cone',
                    toppings: [],
                    total: 20
                }
            ]);
        });
        it('Should return a basket total of 58', () => {
            let instance = IceCreamManager();

            instance.addToBasket({
                flavour: 'Chocolate',
                container: 'Plain cone',
                toppings: [],
                total: 20
            });
            instance.addToBasket({
                flavour: 'Strawberry',
                container: 'Sugar cone',
                toppings: ['Oreos', 'Astros'],
                total: 38
            });

            assert.equal(instance.returnBasketTotal(), 58.00);
        });
    });
    describe('Testing lists', () => {
        it('Should return the full flavour list', ()=>{
            let instance = IceCreamManager();

            assert.deepEqual(instance.flavoursList(), [
                { flavour: 'Flavour', cost: 0 },
                { flavour: 'Vanilla', cost: 10 },
                { flavour: 'Chocolate', cost: 15 },
                { flavour: 'Strawberry', cost: 15 },
                { flavour: 'Bubblegum', cost: 14 },
                { flavour: 'Tinroof', cost: 21 },
            ]);
        });
        it('Should return the full container list', ()=>{
            let instance = IceCreamManager();

            assert.deepEqual(instance.containersList(), [
                { container: 'Container', cost: 0 },
                { container: 'Plain cone', cost: 5 },
                { container: 'Sugar cone', cost: 8 },
                { container: 'Paper cup', cost: 4 },
            ]);
        });
        it('Should return the full toppings list', ()=>{
            let instance = IceCreamManager();

            assert.deepEqual(instance.toppingsList(), [
                { topping: 'Crumbled peanuts', cost: 6 },
                { topping: 'Caramal dip', cost: 4 },
                { topping: 'Chocolate Dip', cost: 3 },
                { topping: 'Smarties', cost: 9 },
                { topping: 'Oreos', cost: 7 },
                { topping: 'Astros', cost: 8 },
            ]);
        });
    });
});