const container = document.getElementById("container");
const slider = document.getElementById("gridSize");
const output = document.getElementById("gridValue");
const resetButton = document.getElementById('reset');
const maxSize = window.innerWidth / 8;

function changeColor(e) {
	e.target.style.backgroundColor = 'black';
}

function changeColor(e) {
	e.target.style.backgroundColor = 'black';
}

function buildGrid(gridSize) {
	container.style.setProperty('--grid-cols', gridSize);
	container.style.setProperty('margin', 'auto');
	container.style.setProperty('margin-top', '30px');
	for (let i = 0; i < (gridSize * gridSize); i++) {
		let element = document.createElement('div');
		element.addEventListener('mouseover', changeColor);
		container.appendChild(element).className = 'grid-item';
	}
}

function resetGrid() {
	container.innerHTML = '';
	buildGrid(gridSize);
}

let gridSize = slider.value;
output.innerHTML = gridSize;

slider.oninput = function() {
	output.innerHTML = this.value;
	gridSize = this.value;
	resetGrid(gridSize);
}

resetButton.onclick = () => resetGrid();

window.onload = (buildGrid(gridSize, gridSize));
