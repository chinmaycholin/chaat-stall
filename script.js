/**
 * Chaat Stall - Digital Menu Website JavaScript
 * Pure Vanilla JS, Mobile-First, Highly Performant
 */

// 1. Menu Array Data (Prices and details editable here)
const menu = [
    {
        name: "Bhelpuri",
        price: 40,
        image: "images/bhelpuri.jpg"
    },
    {
        name: "Shevpuri",
        price: 50,
        image: "images/shevpuri.jpg"
    },
    {
        name: "Panipuri",
        price: 30,
        image: "images/panipuri.jpg"
    },
    {
        name: "Dahipuri",
        price: 60,
        image: "images/dahipuri.jpg"
    },
    {
        name: "Masala Puri",
        price: 40,
        image: "images/masalapuri.jpg"
    },
    {
        name: "Dabeli",
        price: 30,
        image: "images/dabeli.jpg"
    }
];

// Leaf Twig SVG markup used to flank the price badges (matching the poster decoration)
const leafSvgMarkup = `
<svg class="leaf-twig" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <!-- Center branch stem -->
    <path d="M2,21 Q9,20 14,12" />
    <!-- Leaf 1 (Top Right) -->
    <path d="M14,12 C17,9 20,4 17,3 C15,4 13,8 14,12 Z" fill="currentColor" />
    <!-- Leaf 2 (Down Left) -->
    <path d="M8,17 C5,16 2,12 5,11 C7,11 8,14 8,17 Z" fill="currentColor" />
</svg>
`;

// 2. DOM Elements
const menuGrid = document.getElementById("menu-grid");

// 3. Dynamic Menu Cards Rendering Function
function renderMenu() {
    if (!menuGrid) return;
    
    // Clear any hardcoded placeholders (though none exist)
    menuGrid.innerHTML = "";
    
    menu.forEach(item => {
        // Create card container
        const card = document.createElement("div");
        card.className = "menu-card";
        
        // Build card HTML
        card.innerHTML = `
            <!-- Circular image wrapper with gold outline -->
            <div class="card-image-wrapper">
                <img class="card-image" src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            
            <!-- Styled card header with rays -->
            <div class="card-header">
                <span class="card-title-rays title-rays-left"></span>
                <h3 class="card-title">${item.name}</h3>
                <span class="card-title-rays title-rays-right"></span>
            </div>
            
            <!-- Separator dashed line -->
            <div class="card-separator"></div>
            
            <!-- Price badge with leaf twig ornaments -->
            <div class="price-container">
                <div class="leaf-twig-container leaf-left">
                    ${leafSvgMarkup}
                </div>
                <div class="price-badge">
                    <span class="amount">₹${item.price}</span>
                </div>
                <div class="leaf-twig-container leaf-right">
                    ${leafSvgMarkup}
                </div>
            </div>
        `;
        
        menuGrid.appendChild(card);
    });
}

// 4. Staggered Entry Animation for Cards
function animateCards() {
    const cards = document.querySelectorAll(".menu-card");
    cards.forEach((card, index) => {
        // Staggered delay for each card (120ms intervals)
        setTimeout(() => {
            card.classList.add("show-card");
        }, index * 120);
    });
}

// 5. Initializer
document.addEventListener("DOMContentLoaded", () => {
    // Render dynamic components
    renderMenu();
    
    // Trigger animations
    animateCards();
});
