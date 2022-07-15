const sendToHtml = document.getElementById('electroics-container')
const sendToHtml2 = document.getElementById('cart')
const forms = document.getElementById('form1')


const baseURL = 'http://localhost:5500/api/data'

const dataCallback = ({ data: data}) => displayData(data)
const errCallback = err => console.log(err)

const getAllProducts = () => axios.get(baseURL).then(dataCallback).catch(errCallback)
const createProduct = body => axios.post(baseURL, body).then(dataCallback).catch(errCallback)
const deleteData = id => axios.delete(`${baseURL}/${id}`).then(dataCallback).catch(errCallback)


function submitHandler(e) {
    e.preventDefault()

    let address = document.querySelector('#address')
    let price = document.querySelector('#price')
    let imageURL = document.querySelector('#img')
    
    console.log(address.value)
    console.log(price.value)
    console.log(imageURL.value)
    console.log(address)
    console.log(price)
    console.log(imageURL)

    const body = {
        address: address.value,
        price: price.value, 
        imageURL: imageURL.value
    }

    createProduct(body)
    // console.log(bodyObj)

    address.value = ''
    price.value = ''
    imageURL.value = ''
    // con()
}
function putInCart(e) {
    e.preventDefault()

    let address = document.querySelector('#address')
    let price = document.querySelector('#price')
    let imageURL = document.querySelector('#img')
    

    const body = {
        address: address.value,
        price: price.value, 
        imageURL: imageURL.value
    }

    createProduct(body)
    // console.log(bodyObj)

    address.value = ''
    price.value = ''
    imageURL.value = ''
    // con()
}


function createProducts(data) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
    
    productCard.innerHTML = `<img alt='product cover image' src=${data.imageURL} class="imageURL" height="500" width="500" flex-direction: column;
    align-items: center;
    justify-content: center/>
    <p class="address">${data.address}</p>
    <div class="btns-container">
    <p class="price">$${data.price}</p>
    
    <button onclick="deleteData(${data.id})" class="button4" style="background-color:#f14e4e">DELETE</button>
    <button onclick="putInCart(${data})" class="button4" style="background-color:#f14e4e">add to cart</button>
    </div>
    
    `
    
    
    sendToHtml.appendChild(productCard)
    
}



const productArray = []


if ( document.URL.includes("home") ) {
    //Code here
    console.log(1)
    function displayData(arr) {
        sendToHtml.innerHTML = ``
        for (let i = 0; i < arr.length; i++) {
            // if(arr[i].style === "lights"){
                createProducts(arr[i])
                productArray.push(arr[i])
                // }
            }
}
}
if ( document.URL.includes("vr") ) {
    //Code here
    console.log(1)
    function displayData(arr) {
        sendToHtml.innerHTML = ``
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].type === "VR"){
                createProducts(arr[i])
                productArray.push(arr[i])
                }
            }
}
}
if ( document.URL.includes("pc") ) {
    //Code here
    console.log(1)
    function displayData(arr) {
        sendToHtml.innerHTML = ``
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].type === "pc"){
                createProducts(arr[i])
                productArray.push(arr[i])
                }
}
}
}
if ( document.URL.includes("phones") ) {
    //Code here
    console.log(1)
    function displayData(arr) {
        sendToHtml.innerHTML = ``
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].type === "phones"){
                createProducts(arr[i])
                productArray.push(arr[i])
            }
}
}
}
if ( document.URL.includes("processors") ) {
    //Code here
    console.log(1)
    function displayData(arr) {
        sendToHtml.innerHTML = ``
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].type === "processors"){
                createProducts(arr[i])
                productArray.push(arr[i])
                }
}
}
}
if ( document.URL.includes("parts") ) {
    //Code here
    console.log(1)
    function displayData(arr) {
        sendToHtml.innerHTML = ``
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].type === "parts"){
                createProducts(arr[i])
                productArray.push(arr[i])
            }
        }
    }
}
if ( document.URL.includes("sell") ) {
    forms.addEventListener('submit', submitHandler)
    console.log(1)
    function displayData(arr) {
        sendToHtml.innerHTML = ``
        for (let i = 0; i < arr.length; i++) {
            // if(arr[i].type === "parts"){
                createProducts(arr[i])
                productArray.push(arr[i])
                // }
            }
        }

    }

    

    if ( document.URL.includes('checkout') )
     {
    
        const subtotal = document.createElement('div')
        subtotal.classList.add('product-card')
    
        subtotal.innerHTML = `    <div id="subtotal">
        <h3>Cart Total:</h3>
        <table>
          <tr>
              <td>Cart Subtotal</td>
              <td>${cart}</td>
          </tr>
          <tr>
              <td>Shipping</td>
              <td>Free</td>
          </tr>
          <tr>
              <td><strong>Total:</strong></td>
              <td><strong>$${bag[bag.length - 1]}</strong></td>
          </tr>
        </table>
        <button class="normal">Proceed to checkout</button>
    
        `
        function displayData() {
            sendToHtml2.innerHTML = ``
                    sendToHtml2.appendChild(subtotal)
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
