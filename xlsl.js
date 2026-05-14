// xlsl.js - Additional effects / utilities (you can expand)
console.log('%cSidra Fayyaz Portfolio Loaded Successfully', 'color: #667eea; font-size: 14px; font-weight: bold');

// Example: Typing effect for hero (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
