const groceries = {
    "Orange Juice": {
    price : 1.5,
    discount: 10,
    },
    "Chocolate": {
    price : 2,
    discount : 0,
    },
    // more items...
}

const shoppingBag = [
    { product: 'Chocolate', quantity: 3 },
    { product: 'Orange Juice', quantity: 23 },
]


function getTotalPriceOfShoppingBag(bag) {//общая стоимость всех товаров 
    //в корзице с учетом скидок и с учетом указанных клиентом количеством продуктов
    const keys = Object.keys(groceries);
    let sum = 0;
   
    for (let i = 0; i < keys.length; i += 1) {
        for (const [key, value] of Object.entries(bag)) {
            if (value.product === keys[i]) {
                // console.log('groceries[keys[i]].price', groceries[keys[i]].price);
                // console.log('groceries[keys[i]].discount', groceries[keys[i]].discount);
                // console.log('bag.quantity', value.quantity);

                sum += ((groceries[keys[i]].price * value.quantity) - (groceries[keys[i]].price * value.quantity * (groceries[keys[i]].discount / 100)));
            }
        }
    }
    return sum;
}

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice); // Возвращает 37.05

//