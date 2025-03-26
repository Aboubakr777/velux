// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Countdown Timer
function updateCountdown() {
    const now = new Date();
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');
    
    let h = parseInt(hours.textContent);
    let m = parseInt(minutes.textContent);
    let s = parseInt(seconds.textContent);
    
    if (s > 0) {
        s--;
    } else {
        s = 45;
        if (m > 0) {
            m--;
        } else {
            m = 39;
            if (h > 0) {
                h--;
            } else {
                h = 21;
            }
        }
    }
    
    hours.textContent = h.toString().padStart(2, '0');
    minutes.textContent = m.toString().padStart(2, '0');
    seconds.textContent = s.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);

// Stock Counter
let stockCount = 52;
const stockDisplay = document.getElementById('stock-count');
const stockDisplay_hero = document.getElementById('stock-count-hero');
console.log(stockDisplay_hero.textContent, stockDisplay.textContent);
function updateStock() {
    if (stockCount > 1) {
        stockCount--;
        // stockDisplay_hero--;
        // stockDisplay_hero.textContent = stockCount;
        stockDisplay.textContent = stockCount;
    }
}

setInterval(updateStock, 25000);



