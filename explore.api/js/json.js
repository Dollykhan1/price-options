const user = {id: 1, name: 'amer khan', job: 'actor'};
const stringified = JSON.stringify(user);
//javaScript object nation (JSON)
 console.log(user);
 console.log(stringified);
/**
 * {id: 1, name: 'amer khan', job: 'actor'};
 * {id: 1, name: 'amer khan', job: 'actor'};
 */
const shop = {
    owner: 'khan',
    address: {
        street: 'woodlon ave',
        city: 'jamaica',
        country: 'new york usa'
    },
    products: ['laptop','mac', 'monitor','keyboard'],
    revenue: 50000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj)