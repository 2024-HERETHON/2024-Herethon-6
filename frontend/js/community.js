// community.js

document.querySelector('.category-button').addEventListener('click', function() {
    const popup = document.getElementById('category-popup');
    popup.style.display = 'flex';
    setTimeout(function() {
        popup.classList.add('show');
    }, 10); // CSS animation
});

document.querySelectorAll('.category-option').forEach(function(button) {
    button.addEventListener('click', function() {
        var selectedCategory = this.getAttribute('data-category');
        document.getElementById('category').value = selectedCategory;
        document.querySelector('.category-button').textContent = selectedCategory;
        const popup = document.getElementById('category-popup');
        popup.classList.remove('show');
        setTimeout(function() {
            popup.style.display = 'none';
        }, 300); // Wait for the animation to finish
    });
});

document.querySelector('.close-popup').addEventListener('click', function() {
    const popup = document.getElementById('category-popup');
    popup.classList.remove('show');
    setTimeout(function() {
        popup.style.display = 'none';
    }, 300); // Wait for the animation to finish
});
