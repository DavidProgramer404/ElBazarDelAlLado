function filterCategory(category) {
    const products = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Actualizar estilo de los botones
    buttons.forEach(btn => {
        btn.classList.remove('bg-orange-600', 'text-white', 'shadow-md');
        btn.classList.add('bg-white', 'text-gray-800', 'border');
        
        // El botón clickeado se activa (esto es una lógica simple basada en texto o data)
        if(btn.innerText.toLowerCase().includes(category) || (category === 'all' && btn.innerText.includes('Todos'))) {
             btn.classList.remove('bg-white', 'text-gray-800');
             btn.classList.add('bg-orange-600', 'text-white');
        }
    });

    // Filtrar los productos
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        
        if (category === 'all' || productCategory === category) {
            product.style.display = 'block';
            // Pequeña animación de entrada
            product.classList.add('animate-fadeIn');
        } else {
            product.style.display = 'none';
        }
    });
}

// Inicializar la página mostrando todos
document.addEventListener('DOMContentLoaded', () => filterCategory('all'));
