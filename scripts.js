const container = document.getElementById("container");
const slider = document.getElementById("gridSize");
const output = document.getElementById("gridValue");
let gridSize = slider.value;
output.innerHTML = gridSize;

slider.oninput = function() {
	output.innerHTML = this.value;
	gridSize = this.value;
	resetGrid(gridSize);
}

function changeColor(e) {
	e.target.style.backgroundColor = 'black';
}

function setDivs(gridSize) {
	container.style.setProperty("--grid-rows", gridSize);
	container.style.setProperty("--grid-cols", gridSize);
	for (let i = 0; i < gridSize * gridSize; i++) {
		let elem = document.createElement("div");
		// elem.innerText = i + 1;
		elem.addEventListener('mouseover', changeColor);
		container.appendChild(elem).className = "grid-item";
	}
}

function resetGrid() {
	container.innerHTML = '';
	setDivs(gridSize);
}

//document.addEventListener("DOMContentLoaded", setDivs(16, 16));
window.onload = (setDivs(gridSize));

const resetButton = document.getElementById('reset');

resetButton.onclick = () => resetGrid();