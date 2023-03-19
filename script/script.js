const grid = document.querySelector('#sketch');
const slider = document.querySelector('#slider');
const color = document.querySelector('#pickedColor');
const currentSketchSize = document.querySelector('.text');
currentSketchSize.style.textAlign = 'center';
currentSketchSize.style.fontWeight = 'bold';
currentSketchSize.style.fontSize = '20px';

let currentColor;
let mousePressed = false;
document.body.onmousedown = () => mousePressed = true;
document.body.onmouseup = () => mousePressed = false;


const chooseColor = document.querySelector('#chooseColor');
const ranibowColor = document.querySelector('#rainbowColor');
const clearColor = document.querySelector('#clearColor');
let mode;

function changeStatus(action) {
    newMode(action);
    mode = action;
}

function newMode(color){
    return color;
}

chooseColor.addEventListener('click', () => changeStatus('mono'))
ranibowColor.addEventListener('click', () => changeStatus('rainbow'))
clearColor.addEventListener('click', () => {
    grid.innerText = '';
    setupSketch(slider.value);
})

function setupSketch(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    currentSketchSize.innerText = `${size} * ${size}`;
    for(i = 0; i<size*size; i++){
        const row = document.createElement('div'); 
        row.classList.add('pixel');
        row.addEventListener('mouseover', changeColor);
        row.addEventListener('mousedown', changeColor);
        grid.appendChild(row);
    }
}

setupSketch(16);
slider.addEventListener('input', (Event) => {
    grid.innerText='';
    setupSketch(Event.target.value);
})

color.addEventListener('change', (Event) => {
    currentColor = Event.target.value;
})

function changeColor(e) {
    if(e.type === 'mouseover' && !mousePressed) return;
    if(mode === 'mono') {
        e.target.style.backgroundColor = currentColor;
    }
    else if(mode === 'rainbow') {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
    else e.target.style.backgroundColor = '#000000';

}