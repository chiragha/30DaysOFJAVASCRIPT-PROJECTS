const numCount = document.getElementById("numcount");
const increase = document.getElementById("increase");
const Reset = document.getElementById("Reset");
const Decrease = document.getElementById("Decrease");


let count=0;

function increBtn() {
	count+= 1;
	numCount.innerHTML = count;	
	
}

function decreBtn() {
	count-= 1;
	numCount.innerHTML = count;	
	
}

function resetBtn() {
	count= 0;
	numCount.innerHTML = count;	
	
}
