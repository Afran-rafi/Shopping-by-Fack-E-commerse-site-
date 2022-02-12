function updateProductNumber (product , price , IsIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(IsIncreasing == true){
        productNumber =  parseInt(productNumber) + 1;
    }
    else if (productNumber > 0){
        productNumber =  parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-money');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();
};

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// Phone---------
document.getElementById('phone-plus-button').addEventListener 
('click' , function(){
    updateProductNumber ('phone' , 1219 ,true);
});

document.getElementById('phone-minus-button').addEventListener
('click' , function() {
    updateProductNumber ('phone' , 1219 , false);
});

// Case -----------
document.getElementById('case-plus-button').addEventListener 
('click' , function(){
    updateProductNumber ('case' , 59 , true);
});

document.getElementById('case-minus-button').addEventListener
('click' , function() {
    updateProductNumber ('case', 59 , false);
});

document.getElementById('buy-now').addEventListener('click' , function (){
    window.location.href = 'fuck.html';
})