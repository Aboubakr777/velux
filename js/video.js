document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.getElementById('video-container');
    const videoPopup = document.getElementById('video-popup');
    const closePopup = document.getElementById('close-popup');
    const popupVideo = document.getElementById('popup-video');
    const previewVideo = document.getElementById('preview-video');
    
    // Open popup when clicking on the video container
    videoContainer.addEventListener('click', function() {
        videoPopup.style.display = 'flex';
        popupVideo.currentTime = previewVideo.currentTime; // Match the time of the preview
        popupVideo.play();
        previewVideo.pause(); // Pause the preview when showing popup
    });
    
    // Close popup when clicking the close button
    closePopup.addEventListener('click', function(e) {
        e.stopPropagation();
        videoPopup.style.display = 'none';
        popupVideo.pause();
        previewVideo.play(); // Resume the preview when closing popup
    });
    
    // Close popup when clicking outside the video
    videoPopup.addEventListener('click', function(e) {
        if (e.target === videoPopup) {
            videoPopup.style.display = 'none';
            popupVideo.pause();
            previewVideo.play(); // Resume the preview when closing popup
        }
    });
    
    // Handle ESC key to close popup
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoPopup.style.display === 'flex') {
            videoPopup.style.display = 'none';
            popupVideo.pause();
            previewVideo.play();
        }
    });
});