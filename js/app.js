// Set base path based on environment
(function() {
    try {
        var base = document.createElement('base');
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            // Local development
            base.href = './';
        } else {
            // Production (Netlify)
            base.href = '/steve-goseland/';
        }
        document.head.appendChild(base);
    } catch (e) {
        // Fallback: set default base for production
        var fallbackBase = document.createElement('base');
        fallbackBase.href = '/steve-goseland/';
        document.head.appendChild(fallbackBase);
    }
})();
