// alert user product added to shopping cart //

function alertUserShoppingCart () {
    alert("Product has been Added to shopping cart!")
    window.location.href = "shopping-cart.html"
}



// Save product to localStorage //
let x = JSON.parse(localStorage.getItem("item1"));
let a = JSON.parse(localStorage.getItem("item2"));

var table = document.getElementById("cart-item");

var row0 = table.insertRow(0);
var cell1 = row0.insertCell(0);
var cell2 = row0.insertCell(1);
var cell3 = row0.insertCell(2);
var cell4 = row0.insertCell(3);
var cell5 = row0.insertCell(4);

var row1 = table.insertRow(1);
var cell6 = row1.insertCell(0);
var cell7 = row1.insertCell(1);
var cell8 = row1.insertCell(2);
var cell9 = row1.insertCell(3);
var cell10 = row1.insertCell(4);

var row2 = table.insertRow(2);
var cell11 = row2.insertCell(0);
var cell12 = row2.insertCell(1);
var cell13 = row2.insertCell(2);
var cell14 = row2.insertCell(3);
var cell15 = row2.insertCell(4);

cell1.innerHTML = `<th>Image</th>`
cell2.innerHTML = `<th>Product</th>`
cell3.innerHTML = `<th>Price</th>`
cell4.innerHTML = `<th>Quantity</th>`
cell5.innerHTML = `<th></th>`

cell6.innerHTML = `<td><img src=${x[0].img} width="180px" alt=""></td>`;
cell7.innerHTML = `<td class="special-product">${x[0].product}</td>`;
cell8.innerHTML = `<td class="cart-price">${x[0].price}₫</td>`
cell9.innerHTML = `<td><input class="cart-quantity" type="number" value="${x[0].quantity}" min="1" ></td>`
cell10.innerHTML = `<td><button class="remove-button" type="button" onclick="removeproduct1();">Remove</button></td>`

cell11.innerHTML = `<td><img src=${a[0].img} width="180px" alt=""></td>`;
cell12.innerHTML = `<td class="special-product">${a[0].product}</td>`;
cell13.innerHTML = `<td class="cart-price">${a[0].price}₫</td>`
cell14.innerHTML = `<td><input class="cart-quantity" type="number" value="${a[0].quantity}" min="1" ></td>`
cell15.innerHTML = `<td><button class="remove-button" type="button" onclick="removeproduct2();">Remove</button></td>`

document.getElementById("1").addEventListener("click", () => {
    document.getElementById().innerHTML =
        +1
})

function addToCart1(img, product, price, quantity) {
    let item1 = [];
    let y = JSON.parse(localStorage.getItem("item1"));
    if (y === null) {
        item1.push({ img, product, price, quantity });
        localStorage.setItem("item1", JSON.stringify(item1));
        updateCartTotal()
    }
    else {
        let copy = y[0];
        copy.quantity = copy.quantity + 1;
        item1.push(copy);
        localStorage.setItem("item1", JSON.stringify(item1));
        updateCartTotal()
    }
}

function addToCart2(img, product, price, quantity) {
    let item2 = [];
    let b = JSON.parse(localStorage.getItem("item2"));
    if (b === null) {
        item2.push({ img, product, price, quantity });
        localStorage.setItem("item2", JSON.stringify(item2));
        updateCartTotal()
    }
    else {
        let copy = b[0];
        copy.quantity = copy.quantity + 1;
        item2.push(copy);
        localStorage.setItem("item2", JSON.stringify(item2));
        updateCartTotal()
    }
}

function updateCartTotal() {
    for (let i = 0; i < localStorage.length; i++) {       
        let key = localStorage.key(i);
        console.log(localStorage.getItem(key));
        let y = JSON.parse(localStorage.getItem("item1"));
        let b = JSON.parse(localStorage.getItem("item2"));
        total = 0
        if (y === null){
            price1 = 0
            quantity1 = 0
            price2 = parseFloat(b[0].price)
            quantity2 = parseFloat(b[0].quantity)
            total = total + price2 * quantity2
            console.log(total)
        }
        if ( b === null){
            price2 = 0 
            quantity2 = 0
            price1 = parseFloat(y[0].price)
            quantity1 = parseFloat(y[0].quantity)
            total = total + price1 * quantity1
            console.log(total)
        }
        else {
            price1 = parseFloat(y[0].price)
            quantity1 = parseFloat(y[0].quantity)
            price2 = parseFloat(b[0].price)
            quantity2 = parseFloat(b[0].quantity)
            total = total + price1 * quantity1 + price2 * quantity2
            console.log(total)
        }
    }  
    document.getElementById('cart-total-price').innerHTML= total + " ₫"
}

// remove button //
function removeproduct1 () {
    localStorage.removeItem('item1');
    window.location.href = "shopping-cart.html";
}

function removeproduct2 () {
    localStorage.removeItem('item2');
    window.location.href = "shopping-cart.html";
}