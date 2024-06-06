let hex = document.getElementById("hex");
let colorInput = document.getElementById("color");
let backGRound = document.querySelector(".container");
const popup = document.querySelector('.popup');


color.addEventListener('input' , () =>{
	let color = colorInput.value;
	hex.value = color;
	
	document.body.style.background = color;
});

