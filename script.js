// Sample product data
const products = [
    {
        id: 1,
        name: 'Samsung Galaxy M33 5G (Mystique Green, 128 GB)',
        price: '₹18,999',
        originalPrice: '₹24,999',
        discount: '24% off',
        image: 'https://m.media-amazon.com/images/I/810Rscvmd4L._AC_UF350,350_QL80_.jpg'
    },
    {
        id: 2,
        name: 'boAt Airdopes 141 Bluetooth Headset',
        price: '₹1,299',
        originalPrice: '₹4,990',
        discount: '74% off',
        image: 'https://m.media-amazon.com/images/I/61dGwBIwaDL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        id: 3,
        name: 'Mi 5A 80 cm (32 inch) HD Ready LED Smart Android TV',
        price: '₹13,999',
        originalPrice: '₹23,999',
        discount: '42% off',
        image: 'https://telecominox.in/wp-content/uploads/2022/08/mi-tv-2022-5.webp'
    },
    {
        id: 4,
        name: 'Puma Unisex-Adult Black Woven Design Running Shoes',
        price: '₹1,799',
        originalPrice: '₹3,999',
        discount: '55% off',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhV7c8eJ_jsFes4sUnkNUUYa6a40f90ZhDcQ&s'
    },
    {
        id: 5,
        name: 'Nike Men Black & White Running Shoes',
        price: '₹2,999',
        originalPrice: '₹5,995',
        discount: '50% off',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEYm_CZfW9xpC33rMw066rrjxDreIDq663lA&s'
    },
    {
        id: 6,
        name: 'APPLE iPhone 13 (Blue, 128 GB)',
        price: '₹61,999',
        originalPrice: '₹69,900',
        discount: '11% off',
        image: 'https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70'
    }
];

// DOM Elements
const productsContainer = document.getElementById('products-container');
const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const loginButton = document.querySelector('.login button');
const cartButton = document.querySelector('.cart');

// Display products
function displayProducts(productsToShow) {
    productsContainer.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-title">${product.name}</div>
            <div class="product-price">
                ${product.price}
                <span class="original-price">${product.originalPrice}</span>
                <span class="discount">${product.discount}</span>
            </div>
            <button class="add-to-cart" data-id="${product.id}">ADD TO CART</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts.length > 0 ? filteredProducts : products);
}

// Event Listeners
searchButton.addEventListener('click', handleSearch);

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

loginButton.addEventListener('click', () => {
    alert('Login/Sign Up functionality will be implemented here!');
});

cartButton.addEventListener('click', () => {
    alert('Cart functionality will be implemented here!');
});

// Add to cart functionality
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        if (product) {
            alert(`Added to cart: ${product.name}`);
            // Here you would typically add the product to a cart array or state management
        }
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    
    // Add animation to categories on page load
    const categories = document.querySelectorAll('.category');
    categories.forEach((category, index) => {
        setTimeout(() => {
            category.style.opacity = '1';
            category.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});

// Add hover effect to product cards
productsContainer.addEventListener('mouseover', (e) => {
    const productCard = e.target.closest('.product-card');
    if (productCard) {
        productCard.style.transform = 'translateY(-5px)';
        productCard.style.boxShadow = '0 4px 16px 0 rgba(0, 0, 0, 0.1)';
    }
});

productsContainer.addEventListener('mouseout', (e) => {
    const productCard = e.target.closest('.product-card');
    if (productCard) {
        productCard.style.transform = 'translateY(0)';
        productCard.style.boxShadow = 'none';
    }
});
