// Override base path for local development
(function() {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        // Local development: override the default base tag
        var existingBase = document.querySelector('base');
        if (existingBase) {
            existingBase.href = './';
        }
    }
    // Production keeps the default /steve-goseland/ base from HTML
})();
