// Set base path based on environment
(function() {
    var base = document.createElement('base');
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        // Local development
        base.href = './';
    } else {
        // Production (Netlify)
        base.href = '/steve-goseland/';
    }
    document.head.appendChild(base);
})();
