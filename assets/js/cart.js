// Carrito de Compras - El Bazar De Al Frente

// Estado del carrito
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Guardar carrito en localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Agregar producto al carrito
function addToCart(name, price, image) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    saveCart();
    showNotification('Producto agregado al carrito');
}

// Eliminar producto del carrito
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    saveCart();
    renderCart();
}

// Cambiar cantidad
function changeQuantity(name, delta) {
    const item = cart.find(item => item.name === name);
    
    if (item) {
        item.quantity += delta;
        
        if (item.quantity <= 0) {
            removeFromCart(name);
        } else {
            saveCart();
            renderCart();
        }
    }
}

// Calcular total
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Actualizar contador del carrito
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(el => {
        el.textContent = count;
    });
}

// Renderizar carrito en el modal
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="text-center py-8 text-gray-500">
                <i class="fas fa-shopping-basket text-4xl mb-4 text-gray-300"></i>
                <p>Tu carrito está vacío</p>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
                <div class="flex-1">
                    <h4 class="font-bold text-gray-800 text-sm">${item.name}</h4>
                    <p class="text-orange-600 font-bold">$${item.price.toLocaleString('es-CO')}</p>
                    <div class="flex items-center gap-2 mt-1">
                        <button onclick="changeQuantity('${item.name}', -1)" class="w-7 h-7 bg-orange-200 rounded-full text-orange-700 font-bold hover:bg-orange-300 transition">-</button>
                        <span class="text-sm font-semibold">${item.quantity}</span>
                        <button onclick="changeQuantity('${item.name}', 1)" class="w-7 h-7 bg-orange-200 rounded-full text-orange-700 font-bold hover:bg-orange-300 transition">+</button>
                    </div>
                </div>
                <button onclick="removeFromCart('${item.name}')" class="text-red-500 hover:text-red-700 p-2">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }
    
    if (cartTotalElement) {
        cartTotalElement.textContent = `$${getCartTotal().toLocaleString('es-CO')}`;
    }
}

// Alternar modal del carrito
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.classList.toggle('hidden');
        renderCart();
    }
}

// Finalizar compra
function checkout() {
    if (cart.length === 0) {
        showNotification('Tu carrito está vacío', 'error');
        return;
    }
    
    const total = getCartTotal();
    const message = `Hola! Quiero realizar un pedido:%0A%0A*Items:*%0A${cart.map(item => `- ${item.quantity}x ${item.name} ($${(item.price * item.quantity).toLocaleString('es-CO')})`).join('%0A')}%0A%0A*Total: $${total.toLocaleString('es-CO')}*%0A%0APor favor confirmar tiempo de entrega.`;
    
    window.open(`https://wa.me/573001234567?text=${message}`, '_blank');
}

// Mostrar notificación
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-4 right-4 px-6 py-3 rounded-xl shadow-xl z-50 animate-fadeIn ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`;
    notification.innerHTML = `
        <div class="flex items-center gap-2">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    
    // Event listeners para botones de agregar
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const card = button.closest('.product-card, .product-item');
            const name = card.querySelector('h3').textContent;
            const priceText = card.querySelector('.text-orange-600').textContent.replace(/[$.]/g, '');
            const price = parseInt(priceText);
            const image = card.querySelector('img').src;
            
            addToCart(name, price, image);
        });
    });
    
    // Cerrar modal al hacer click fuera
    const modal = document.getElementById('cart-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }
});
