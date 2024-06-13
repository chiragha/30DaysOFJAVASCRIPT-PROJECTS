const colors = document.querySelectorAll('.color-box h2');


function generateColor() {
	colors.forEach((color) => {
		let hexCode = "#" + Math.random().toString(16).substring(2, 8);
		color.style.backgroundColor = hexCode;
		color.innerHTML = hexCode;
		
	});
}

generateColor();