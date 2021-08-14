const container = document.getElementById("container");
const slider = document.getElementById("gridSize");
const output = document.getElementById("gridValue");
const resetButton = document.getElementById('reset');
const rainbowButton = document.getElementById('rainbow');
const maxSize = window.innerWidth / 8;

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function changeColor(e) {
	let color;
	if (rainbow) {
		color = random_rgba();
	} else {
		color = 'black'
	}
	e.target.style.backgroundColor = color;
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
let rainbow = false;

output.innerHTML = gridSize;

slider.oninput = function() {
	output.innerHTML = this.value;
	gridSize = this.value;
	resetGrid(gridSize);
}

resetButton.onclick = () => resetGrid();
rainbowButton.onclick = () => {
	if (rainbow) {
		rainbow = false;
	} else {
		rainbow = true;
	}
};

window.onload = (buildGrid(gridSize, gridSize));
