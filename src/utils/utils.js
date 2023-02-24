const localStorage = window.localStorage;

function addToCart (id, counter) {

const product = [{
    id:id,
    quantity:counter
}]

localStorage.setItem("cart", JSON.stringify(product));


}

export default addToCart

