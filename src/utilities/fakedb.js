//use local storage to manage cart data
const addTodb = id => {

    //adding localstorage object 
    let shoppingcart = {};

    const addQuantity = localStorage.getItem('shop-cart :');

    if (addQuantity) {
        shoppingcart = JSON.parse(addQuantity)
    }
    else {
        shoppingcart = {};
    }

    const quantity = shoppingcart[id];

    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingcart[id] = newQuantity;
    }
    else {
        shoppingcart[id] = 1;
    }
    localStorage.setItem('shop-cart :', JSON.stringify(shoppingcart));






    //adding localstorage normal     
    /*
    const quantity = localStorage.getItem(id);
    if (quantity) {
        console.log('alreasdy ace');
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    }
    else {
        console.log('new item');
        localStorage.setItem(id, 1);
    }
    */

}
export default addTodb;