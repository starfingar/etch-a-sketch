const container = document.getElementById('grid-container');
const color = document.getElementById('cor');
const btnNumberOfSquares = document.getElementById('square-numbers');

let totalItems = 16 * 16;

for (let i = 0; i < totalItems; i++) {
  const item = document.createElement('div');
  item.classList.add('grid-item');
  container.appendChild(item);
}

container.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('grid-item')) {
    e.target.style.backgroundColor = color.value;
    e.target.style.border = 'none';
  }
});

btnNumberOfSquares.addEventListener('click', (e) => {
  const r = parseInt(prompt('Quadrados por lado (ex: 16 para 16x16). Máximo de 16:'));

  if (r > 0 && r <= 16) {
    container.innerHTML = '';
    totalItems = r * r;

    for (let i = 0; i < totalItems; i++) { 
      const item = document.createElement('div'); 
      item.classList.add('grid-item');

      item.style.flex = `1 0 calc(100% / ${r})`;
      item.style.height = `calc(100% / ${r})`;
      
      container.appendChild(item);
    }
  } else {
    alert('Só é permitido números entre 1 e 16');
  }
});