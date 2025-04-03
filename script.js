// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Show preloader for 5 seconds
    setTimeout(function() {
        const preloader = document.querySelector('.preloader');
        const content = document.querySelector('.content');
        
        // Fade out preloader
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease';
        
        // After fade out completes, hide preloader and show content
        setTimeout(function() {
            preloader.style.display = 'none';
            content.style.display = 'block';
            
            // Optional: Fade in content
            content.style.opacity = '0';
            content.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                content.style.opacity = '1';
            }, 10);
        }, 500);
    }, 5000); // 5 seconds
});