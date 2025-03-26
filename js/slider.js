class ModernProductSlider {
    constructor(config) {
        this.images = config.images || [];
        this.mainImage = document.getElementById('main-image');
        this.thumbnailsContainer = document.getElementById('thumbnails');
        this.zoomOverlay = document.getElementById('zoom-overlay');
        this.zoomedImage = document.getElementById('zoomed-image');
        
        this.currentIndex = 0;
        
        this.init();
    }
    
    init() {
        if (this.images.length === 0) return;
        
        this.renderThumbnails();
        this.setMainImage(0);
        this.addEventListeners();
    }
    
    renderThumbnails() {
        this.thumbnailsContainer.innerHTML = this.images.map((src, index) => `
            <img 
                src="${src}" 
                alt="Product Thumbnail ${index + 1}" 
                class="thumbnail ${index === 0 ? 'active' : ''}" 
                data-index="${index}"
                loading="lazy"
            >
        `).join('');
    }
    
    setMainImage(index) {
        if (index < 0 || index >= this.images.length) return;
        
        this.mainImage.src = this.images[index];
        this.mainImage.alt = `Product Image ${index + 1}`;
        
        const thumbnails = this.thumbnailsContainer.querySelectorAll('.thumbnail');
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        thumbnails[index].classList.add('active');
        
        this.currentIndex = index;
    }
    
    addEventListeners() {
        // Thumbnail click event
        this.thumbnailsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('thumbnail')) {
                const index = parseInt(e.target.dataset.index);
                this.setMainImage(index);
            }
        });
        
        // Zoom functionality
        this.mainImage.addEventListener('click', () => this.openZoom());
        this.zoomOverlay.addEventListener('click', () => this.closeZoom());
    }
    
    openZoom() {
        this.zoomedImage.src = this.images[this.currentIndex];
        this.zoomOverlay.classList.add('active');
    }
    
    closeZoom() {
        this.zoomOverlay.classList.remove('active');
    }
}

// Initialize the slider
document.addEventListener('DOMContentLoaded', () => {
    new ModernProductSlider({
        images: [
            'https://vivosee.com/cdn/shop/files/Led-bar-rechargeable-circle-table-lamp-with-usb-port-1.jpg?v=1717027420&width=1946',
            'https://vivosee.com/cdn/shop/files/H6f8cb97e8e68445a904d703c3027e74cP_7bea13d7-a793-4a10-80c1-31658532abaa.jpg?v=1717027420&width=1946',
            'https://vivosee.com/cdn/shop/files/S55f90bda66334ebbbe828abea4111987F_4c39a4dc-f547-49df-b327-e30def5397df.jpg?v=1717027420&width=1946',
            'https://vivosee.com/cdn/shop/files/71AKXv1FzqL._AC_SL1500__1.jpg?v=1717027420&width=1946',
            'https://vivosee.com/cdn/shop/files/LEDCircleDomeTableLamp6.jpg?v=1717027420&width=1946',
        ]
    });
});