const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const productQuantity = document.getElementById('productQuantity');
const productCategory = document.getElementById('productCategory');
const filterCategory = document.getElementById('filterCategory');
const addProductBtn = document.getElementById('addProductBtn');
const filterBtn = document.getElementById('filterBtn');
const totalValueBtn = document.getElementById('totalValueBtn');
const mostValuableBtn = document.getElementById('mostValuableBtn');
const showAllBtn = document.getElementById('showAllBtn');
const outputBox = document.getElementById('outputBox');


let products = [];
const localStorageProducts = loadProducts();


function clearForm(){
    const allInputs = document.querySelectorAll('input:not(#filterCategory)');
    allInputs.forEach(input=>{
        input.value = ''
    })
    
 }

function clearOutBox() {
    outputBox.textContent = '';
}

function loadProducts() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
        products = JSON.parse(savedProducts);
    }
    return products;
}

// Save products to localStorage
function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}


const saveProduct = () => {
    const newProduct = {
        name : productName.value, 
        price : Number(productPrice.value), 
        quantity : Number(productQuantity.value), 
        category : productCategory.value, 
    }
    
    products.push(newProduct);
    clearForm();
    // Save to localStorage
    saveProducts();

    alert('product added succefully')

       
};


const displayAllProducts = () => {
  
    clearOutBox();
    outputBox.textContent = JSON.stringify(products);
}

const filterByCategory = () => {
    const searchedCategory = filterCategory.value;
    const filterdProducts = products.filter(product => product.category === searchedCategory);

    clearOutBox();
    outputBox.textContent = JSON.stringify(filterdProducts);
    
}

console.log(localStorageProducts)

const totalInventoryValue = () => {
    const values = products.map(product => {
        return product.price * product.quantity;
    })
    
    const totalValues = Object.values(values).reduce((acc, val) => acc + val, 0);
    outputBox.textContent = `Total Inventory Value : ${totalValues}`;
    
}


const mostValueProduct = () => {
    const mostValuableProduct = products.reduce((maxProduct, currentProduct) => {
         const currentValue = Number(currentProduct.price) * Number(currentProduct.quantity);
         const maxValue = Number(maxProduct.price) * Number(maxProduct.quantity);
         return currentValue > maxValue ? currentProduct : maxProduct;
});
    outputBox.textContent = JSON.stringify(mostValuableProduct);
};


loadProducts();


addProductBtn.addEventListener('click' , saveProduct);
showAllBtn.addEventListener('click' , displayAllProducts);
filterBtn.addEventListener('click' , filterByCategory);
totalValueBtn.addEventListener('click' , totalInventoryValue);
mostValuableBtn.addEventListener('click' , mostValueProduct);

