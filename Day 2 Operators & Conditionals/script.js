const quantity = document.getElementById('quantity');
const discount = document.getElementById('discount');


function calculatePrice() {
    const itemCost = 10;
    const discountValue = 0.8; 
    if(quantity.value == '' || discount.value == '') {
        alert('Please fill all fields.');
    } else if (quantity.value <= 0) {
        alert('Invalid quantity.');
    } else {
        let shipping = quantity.value >=5 ? 0 :  5 ;  
        if(discount.value === 'no'){
            const totalPrice = itemCost * quantity.value + shipping;
            alert(`Total price is ${totalPrice}` )
        } else if (discount.value === 'yes') {
            const totalPrice = ((itemCost * quantity.value) * discountValue) + shipping;
            alert(`Total price after discount is ${totalPrice}`);
        }
    }
}