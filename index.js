// import axios from "axios"
// const axios = require('axios');
const sendToHtml = document.getElementById('electroics-container')
const sendToHtml2 = document.getElementById('cart')
const forms = document.getElementById('form1')

const baseURL = 'https://dj-f24-hosting.herokuapp.com/api/data'

const dataCallback = ({ data: data}) => displayData(data)
const errCallback = err => console.log(err)

const getAllProducts = () => axios.get(baseURL).then(dataCallback).catch(errCallback)
const createProduct = body => axios.post(baseURL, body).then(dataCallback).catch(errCallback)
const deleteData = id => axios.delete(`${baseURL}/${id}`).then(dataCallback).catch(errCallback)

let total = 0
// const content = document.getElementsByClassName("total");
var paragraph = document.getElementById("total");
// content.innerHTML='<h2 style="background:orange; color:blue; font-family:monospace">This is the new Header</h2>';

function submitHandler(long, cartHolder) {
    // e.preventDefault()
    let address = document.querySelector('#address')
    let price = document.querySelector('#price')
    let imageURL = document.querySelector('#img')
    // console.log(document.querySelector('#img'))
    const body = {
        id: `${long + 1}`,
        address: `${cartHolder}${address.value}`,
        price: price.value, 
        imageURL: imageURL.value
    }
    createProduct(body)
    address.value = ''
    price.value = ''
    imageURL.value = ''
    // con()
}
function putInCart(newId, long, cartHolder) {
    // e.preventDefault()
    let imageURL = document.getElementById(`${newId}`).getElementsByTagName('img')[0].src
    // console.log(imageURL)
    let price = (document.getElementById(`${newId}`).querySelector('.price').innerHTML).replace(/[^0-9]/g,'')
    // console.log(price)
    let address = document.getElementById(`${newId}`).querySelector('.address').innerHTML
    // console.log(document.querySelector('#img'))
    const body = {
        id: `${long + 1}`,
        address: `${cartHolder}${address}`,
        price: price, 
        imageURL: imageURL
    }
    createProduct(body)
    address.innerHTML = ''
    price.innerHTML = ''
    imageURL = ''
    // con()
}
// function putInCart(add, pri, ima) {
//     const body = {
//         address: add,
//         price: pri, 
//         imageURL: ima
//     }
//     createProduct(body)
// }


function createProducts(data, ids, long, cartHolder) {
    // console.log(long)
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
    productCard.setAttribute("id", ids)
    productCard.innerHTML = `<img alt='product cover image' src=${data.imageURL} class="imageURL" height="500" width="500" flex-direction: column;
    align-items: center;
    justify-content: center/>
    <p class="address">${data.address}</p>
    <div class="btns-container">
    <p class="price">$${data.price}</p>
    
    <button onclick="deleteData(${data.id})" class="button4" style="background-color:#f14e4e">DELETE</button>
    <button onclick="putInCart(${ids}, ${long}, ${cartHolder})" class="button4" style="background-color:#f14e4e">add to cart</button>
    </div>
    
    `
    

    
    sendToHtml.appendChild(productCard)
}



const productArray = []
let largestNum = 0


if ( document.URL.includes("home") ) {
    function displayData(arr) {
        sendToHtml.innerHTML = ``
        for (let i = 0; i < arr.length; i++) {
            // console.log(arr[i].address.includes(121))
            if(!arr[i].address.includes(121)){
                createProducts(arr[i], i, arr.length, 121)
                productArray.push(arr[i])
                if (arr[i].id>largestNum) {
                    largestNum = arr[i].id;
                }
                // console.log(Object.values(arr[i])[2])
                }}
        }
}
if ( document.URL.includes("vr") ) {
    function displayData(arr) {
        sendToHtml.innerHTML = ``
        for (let i = 0; i < arr.length; i++) {
            // console.log(arr[i].address.includes(121))
            if(arr[i].type === "VR"){
                createProducts(arr[i], i, arr.length, 121)
                productArray.push(arr[i])
                if (arr[i].id>largestNum) {
                    largestNum = arr[i].id;
                }
                }}
        }
}
if ( document.URL.includes("pc") ) {
    function displayData(arr) {
        sendToHtml.innerHTML = ``
        for (let i = 0; i < arr.length; i++) {
            // console.log(arr[i].address.includes(121))
            if(arr[i].type === "pc"){
                createProducts(arr[i], i, arr.length, 121)
                productArray.push(arr[i])
                if (arr[i].id>largestNum) {
                    largestNum = arr[i].id;
                }
                }}
        }
}
if ( document.URL.includes("phones") ) {
    //Code here
    // console.log(1)
    function displayData(arr) {
        sendToHtml.innerHTML = ``
        for (let i = 0; i < arr.length; i++) {
            // console.log(arr[i].address.includes(121))
            // if(arr[i].type === "phones"){
                createProducts(arr[i], i, arr.length, 121)
                productArray.push(arr[i])
                if (arr[i].id>largestNum) {
                    largestNum = arr[i].id;
                // }
                }}
        }
}
if ( document.URL.includes("processors") ) {
    //Code here
    // console.log(1)
    function displayData(arr) {
        sendToHtml.innerHTML = ``
        for (let i = 0; i < arr.length; i++) {
            // console.log(arr[i].address.includes(121))
            // if(arr[i].type === "processors"){
                createProducts(arr[i], i, arr.length, 121)
                productArray.push(arr[i])
                if (arr[i].id>largestNum) {
                    largestNum = arr[i].id;
                // }
                }}
        }
}
if ( document.URL.includes("parts") ) {
    //Code here
    // console.log(1)
    function displayData(arr) {
        sendToHtml.innerHTML = ``
        for (let i = 0; i < arr.length; i++) {
            // console.log(arr[i].address.includes(121))
            if(arr[i].type === "parts"){
                createProducts(arr[i], i, arr.length, 121)
                productArray.push(arr[i])
                if (arr[i].id>largestNum) {
                    largestNum = arr[i].id;
                }
                }}
        }
}
if ( document.URL.includes("sell") ) {
    // console.log(1)
    forms.addEventListener('submit', submitHandler)
    function displayData(arr) {
        sendToHtml.innerHTML = ``
        for (let i = 0; i < arr.length; i++) {
            // console.log(arr[i].address.includes(121))
            if(!arr[i].address.includes(121)){
                createProducts(arr[i], i, arr.length, 121)
                productArray.push(arr[i])
                if (arr[i].id>largestNum) {
                    largestNum = arr[i].id;
                }
                }}
        }
        }
        console.log(largestNum)

    

    if ( document.URL.includes('checkout') )
    {
        function displayData(arr) {
            sendToHtml.innerHTML = ``
            for (let i = 0; i < arr.length; i++) {
                // console.log(arr[i].address.includes(121))
                if(arr[i].address.includes(121)){
                    createProducts(arr[i], i, arr.length, 121)
                    productArray.push(arr[i])
                    if (arr[i].id>largestNum) {
                        largestNum = arr[i].id;
                    }
                    total += Object.values(arr[i])[2]
                    console.log(total)
                    // content.innerHTML=`<h2>$${total}</h2>`
                    var paragraph = document.getElementById("total");

                    paragraph.textContent = `your total is $${total}`;
                    }}
            }
    }
    // console.log(productArray)

    
// const filteringProducts = (key, value) => {
//     console.log('running')
// sendToHtml.innerHTML = ``
// for (let i = 0; i < productArray.length; i++) {
    //     if(productArray[i][`${key}`] === value){
        //     createProducts(productArray[i])
        //     console.log('running')
// }
// }
// }
// filteringProducts('style', 'lights')


// forms.addEventListener('submit', submitHandler)

getAllProducts()
