const text = document.getElementById("text");
const textSpeed = document.getElementById("speed");
const prog = "Control My Speed";



let spd = 1;
let speed = 300 / textSpeed.value;

// initial call
checkSpeed();

function checkSpeed() {

    text.innerText = prog.slice(0, spd)
	
	spd++;
	
	if(spd > prog.length){
      spd = 1;
    }
	
	setTimeout(checkSpeed, speed);
}

textSpeed.addEventListener('input', (e) => {
	speed = 300 / e.target.value;
});