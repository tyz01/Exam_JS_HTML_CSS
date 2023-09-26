const container = document.getElementById('container');
const addButton = document.getElementById('add-block');

let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'black'];

addButton.addEventListener('click', function() {
  let color = colors[Math.floor(Math.random() * colors.length)];
  let block = document.createElement('div');
  block.style.backgroundColor = color;
  block.classList.add('block');
  container.appendChild(block);

  block.addEventListener('click', function() {
  container.removeChild(block);
  });
});