const grid = document.querySelector('#sketch');

function setupSketch(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(i = 0; i<size*size; i++){
        const row = document.createElement('div');
        grid.appendChild(row);
    }
}

setupSketch(16);
