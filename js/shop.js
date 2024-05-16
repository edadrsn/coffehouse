const searchInput = document.getElementById('searchInput');
const products = document.querySelectorAll('.product');

searchInput.addEventListener('keyup', function () {
    const searchTerm = searchInput.value.toLowerCase();

    products.forEach(product => {
        const productName = product.querySelector('h2').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'inline-block';
        } else {
            product.style.display = 'none';
        }
    });
});

const cartIcon = document.getElementById('cartIcon');
const cartPopup = document.getElementById('cartPopup');
const closeCartBtn = document.querySelector('#cartPopup .close-btn');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const cartItemCount = document.getElementById('cartItemCount');
const cartUpdatePopup = document.getElementById('cartUpdatePopup');
const cartUpdatePopupDelete = document.getElementById('cartUpdatePopupDelete');


function addToCart(productName, productPrice) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const newItem = {
        name: productName,
        price: productPrice
    };

    cartItems.push(newItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartInfo();
}

function removeFromCart(productName) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Ürünü sepetten kaldır
    cartItems = cartItems.filter(item => item.name !== productName);
    
    // Güncelle
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartInfo();
}

// Sepet bilgilerini güncelledimmm
function updateCartInfo() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const itemCount = cartItems.length;
    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);

    cartItemCount.textContent = itemCount; // Sepet ikonundaki ürün adetini güncelle
    renderCartItems(cartItems);
    cartTotalPrice.textContent = totalPrice;
}

// Sepet öğelerini render ettim
function renderCartItems(items) {
    cartItemsContainer.innerHTML = '';
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name}: $${item.price}`;

        cartItemsContainer.appendChild(itemElement);
    });
}

function openCartUpdatePopup() {
    cartUpdatePopup.style.display = 'block';
    updateCartInfo();
}
function openCartUpdatePopupDelete() {
    cartUpdatePopupDelete.style.display = 'block';
    updateCartInfo();
}

function closeCartUpdatePopupDelete() {
    cartUpdatePopupDelete.style.display = 'none';
}


function closeCartUpdatePopup() {
    cartUpdatePopup.style.display = 'none';
}

// Sepet popup'ını açtım
function openCartPopup() {
    cartPopup.style.display = 'block';
    updateCartInfo();
}

// Sepet popup'ını kapattım
function closeCartPopup() {
    cartPopup.style.display = 'none';
}

cartIcon.addEventListener('click', openCartPopup);
closeCartBtn.addEventListener('click', closeCartPopup);
window.addEventListener('DOMContentLoaded', function() {
    // Sayfa yeniden yüklendiğinde sepeti sıfırla
    localStorage.removeItem('cartItems');
    updateCartInfo();
});


/*******/
//* Ürünleri sepete ekledim
let cart = [];


function updateCart() {
    let cartItemsHtml = '';
    let totalPrice = 0;
    cart.forEach(item => {
        cartItemsHtml += `<div>${item.name} - $${item.price.toFixed(2)}</div>`;
        totalPrice += item.price;
    });

    $('#cartItems').html(cartItemsHtml);
    $('#cartTotalPrice').text(totalPrice.toFixed(2));
}


$('.buy-btn').click(function () {
    let productName = $(this).siblings('h2').text();
    let productPrice = parseFloat($(this).siblings('.price').text().replace('$', '').replace(',', '.'));

    cart.push({ name: productName, price: productPrice });
    addToCart(productName, productPrice);
    updateCart();
});

$('#contact-form').submit(function (event) {

    event.preventDefault();
    updateCart();
    $('#cartPopup').show();
});


function closeCartPopup() {
    $('#cartPopup').hide();
}

$(document).ready(function () {
    $('#cartPopup').hide();
});

// Remove button click event
$(document).on('click', '.remove-from-cart-btn', function () {
    const productName = $(this).parent().text().split(':')[0].trim();
    removeFromCart(productName);
});

$(document).ready(function () {
    // Sepetten ürünü kaldır
    $('.remove-from-cart-btn').click(function () {
        let productName = $(this).siblings('h2').text(); // Ürün adını al
        removeFromCart(productName); // Sepetten ürünü kaldır
        updateCartInfo(); // Sepet bilgilerini güncelle
    });

    $('.buy-btn').on('click', function () {
        openCartUpdatePopup();
    });

    $(".remove-from-cart-btn").on("click", function () {
        openCartUpdatePopupDelete();
    });
});


