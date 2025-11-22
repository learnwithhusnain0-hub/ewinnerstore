// Checkout page functionality
function loadOrderSummary() {
    const orderItems = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');
    
    let itemsHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        itemsHTML += `
            <div class="order-item">
                <span>${item.quantity}x ${item.title}</span>
                <span>Rs. ${itemTotal}</span>
            </div>
        `;
    });
    
    orderItems.innerHTML = itemsHTML;
    orderTotal.textContent = `Rs. ${total}`;
}

// WhatsApp redirect function
function redirectToWhatsApp(orderData) {
    // Format the message
    let message = `New Order:\n`;
    message += `Name: ${orderData.name}\n`;
    message += `Phone: ${orderData.phone}\n`;
    message += `Address: ${orderData.address}\n`;
    message += `City: ${orderData.city}\n\n`;
    message += `Items:\n`;
    
    cart.forEach(item => {
        message += `${item.quantity}x ${item.title} (Rs.${item.price * item.quantity})\n`;
    });
    
    message += `\nTotal: Rs. ${orderData.total}\n`;
    
    if (orderData.notes) {
        message += `Notes: ${orderData.notes}`;
    }
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp URL with the number and message
    const whatsappURL = `https://wa.me/923038776223?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.location.href = whatsappURL;
}

// Handle form submission
document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to your cart before checking out.');
        return;
    }
    
    const formData = new FormData(this);
    const orderData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        notes: document.getElementById('notes').value,
        total: cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    };
    
    // Redirect to WhatsApp
    redirectToWhatsApp(orderData);
});

// Load order summary when page loads
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    loadOrderSummary();
    
    // Redirect to cart if empty
    if (cart.length === 0) {
        alert('Your cart is empty. Redirecting to shop page.');
        window.location.href = 'shop.html';
    }
});
