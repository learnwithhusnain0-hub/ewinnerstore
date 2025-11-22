# ShopStyle Ecommerce Website

A modern Shopify-style ecommerce website that works 100% on GitHub Pages.

## Features

- Fully responsive design
- Product catalog from JSON
- Shopping cart with localStorage
- WhatsApp checkout integration
- No backend required

## Pages

- Homepage (index.html)
- Shop (shop.html)
- Cart (cart.html)
- Checkout (checkout.html)
- Order Success (order-success.html)
- About (about.html)
- Contact (contact.html)

## Setup for GitHub Pages

1. Upload all files to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to "main" branch
4. Your site will be live at: `https://[username].github.io/[repository-name]`

## WhatsApp Integration

The checkout system redirects to WhatsApp number 03038776223 with all cart details automatically filled in the message.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- JSON for product data
- localStorage for cart persistence

## Customization

- Edit `data/products.json` to add/update products
- Modify CSS variables in `assets/css/style.css` to change colors
- Update WhatsApp number in `assets/js/checkout.js`