const colors = document.querySelectorAll('.color');
const text = document.querySelector('.text');

for (let color of colors) {
color.addEventListener('click', function() {
text.style.color = color.getAttribute('data-color');
}
)};