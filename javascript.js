const products = [ 
    
{
 id : 1,
 Title : "Baskets",
 Description : "This is a basket",
 Image : "https://images.unsplash.com/photo-1603036050141-c61fde866f5c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJhc2tldHN8ZW58MHx8MHx8fDA%3D",
 Price : 100,
 Quantity : 0


},

{
    id : 2,
    Title : "Socks",
    Description : "This is a socks",
    Image : "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNvY2tzfGVufDB8fDB8fHww",
    Price : 20,
    Quantity : 0
   
   
},

{
    id : 3,
    Title : "Bag",
    Description : "This is a Bag",
    Image : "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFnfGVufDB8fDB8fHww",
    Price : 50,
    Quantity : 0
   
   
}

]

const divcontainer = document.getElementById('container');



///

products.map((product) => {

///
const card = document.createElement('div');
card.classList.add('card');
divcontainer.appendChild(card);
card.setAttribute("data-id", product.id); 
//Title
const title = document.createElement('h2');
title.textContent = product.Title;
card.appendChild(title);
//Description
const desciption = document.createElement('p');
desciption.textContent = product.Description;
card.appendChild(desciption);
//Image
const image = document.createElement('img');
image.classList.add('class-image');
image.src = product.Image;
card.appendChild(image);
// Price
const price = document.createElement('p');
price.classList.add('class-price');
price.textContent = `${product.Price} DH`;
card.appendChild(price);

//Bloc pictos

const mid = document.createElement("div");
mid.classList.add("pictos");
card.appendChild(mid);

//Picto plus
const circleplus = document.createElement('i');
circleplus.classList.add('fa-solid', 'fa-circle-plus');
mid.appendChild(circleplus);
circleplus.onclick = () => incrItem(product.id);

//Quantity 
const quantity = document.createElement("span");
quantity.textContent = product.Quantity;
mid.appendChild(quantity);

//Picto minus
const circlemoins = document.createElement('i');
circlemoins.classList.add('fa-solid', 'fa-minus-circle');
mid.appendChild(circlemoins);
circlemoins.onclick = () => decrItem(product.id);


// Delete items from the cart
const trash = document.createElement('i');
trash.classList.add('fa-solid', 'fa-trash-can');
card.appendChild(trash);

trash.addEventListener("click",() => {

    removeProduct(product.id);

});


// Like items through a clickable heart-shaped button that will change color accordingly
const heart = document.createElement('i');
heart.classList.add('fa-solid', 'fa-heart');
card.appendChild(heart);

heart.addEventListener("click",() => {

    heart.classList.toggle('change-color');
 
 });


})



//Bloc Total

const total = document.getElementById('total');
const divtotal = document.createElement('div');
divtotal.classList.add('class-total');
total.appendChild(divtotal);

const divtotaltext = document.createElement('span');
divtotaltext.textContent="Total price :";
divtotal.appendChild(divtotaltext);

const divtotalprice = document.createElement('span');
divtotalprice.id = 'totalID';
divtotal.appendChild(divtotalprice);

function getTotal(products) {

    let totalItems = 0;

    products.forEach((product) => {

        totalItems+= product.Price * product.Quantity;
        
    });

    const divtotalprice = document.getElementById('totalID');
    divtotalprice.textContent = `${totalItems.toFixed(2)}DH`;

}

getTotal(products);


//function decrItem

function decrItem(id) {
    // Find the product in the 'products' array with matching 'id'
    const product = products.find(p => p.id === id);
    // Check if the product's quantity is greater than 0
    if (product.Quantity > 0) {
        // Decrease the quantity of the product by 1
        product.Quantity--;
        // Update the display of the product's quantity
        updateProductDisplay(id);
        // Recalculate and update the total amount of all products
        getTotal(products);
    }
}

//function incrItem
function incrItem(id) {
    // Find the product in the 'products' array with matching 'id'
    const product = products.find(p => p.id === id);
     // Increase the quantity of the product by 1
     product.Quantity++;
     // Update the display of the product's quantity
    updateProductDisplay(id);
        // Recalculate and update the total amount of all products

    getTotal(products);
}

//function removeProduct
function removeProduct(id) {
    const product = products.findIndex(p => p.id === id);
    if (product !== -1) {
        products.splice(product, 1);
        const card = document.querySelector(`div[data-id="${id}"]`);
        card.remove();
        getTotal(products);
    }
}

//function updateProductDisplay
function updateProductDisplay(id) {
    const product = products.find(p => p.id === id);
    // Find the HTML element (div) that corresponds to the product
    const div = document.querySelector(`div[data-id="${id}"]`);
    // Find the element inside the product's div that displays quantity
    const quantity = div.querySelector("span");
    // Update the text content of the quantity display element
    quantity.textContent = product.Quantity;

}