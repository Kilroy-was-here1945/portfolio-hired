//THIS GRABS ALL OF THE DATA FROM THE JSON IN WHAT IS CURRENTLY A JSON FROM CONTROLLER
// var jsdom = require("jsdom");
// var JSDOM = jsdom.JSDOM;
const sendToHtml = document.getElementById('stuff')

const baseURL = 'http://localhost:5500/api/data'

const dataCallback = ({ data: data}) => displayData(data)
const errCallback = err => console.log(err)

const getAllProducts = () => axios.get(baseURL).then(dataCallback).catch(errCallback)


function createProduct(product) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')

    productCard.innerHTML = `<img alt='product cover image' src=${product.imageURL} class="product-cover-image"/>
    <p class="address">${product.address}</p>
    <div class="btns-container">
        <button onclick="updateproduct(${product.id}, 'minus')">-</button>
        <p class="product-price">$${product.price}</p>
        <button onclick="updateproduct(${product.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteproduct(${product.id})">delete</button>
    `


    sendToHtml.appendChild(productCard)
}

function displayData(arr) {
    dataContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createProduct(arr[i])
    }
}

getAllProducts()
