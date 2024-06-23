const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71','#f2e335', '#ef4a92']

const clr_pattern = 300;

for(let i=0; i<clr_pattern; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    // console.log(square);



    square.addEventListener('mouseover',() =>{
        setClrPattern(square);
    });


    square.addEventListener('mouseout', () => {
        removeClrPattern(square);
    });
    


    square.addEventListener('click',() =>{
        setClrPattern(square);
    });



    container.appendChild(square);
}





function setClrPattern(element){
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}



function removeClrPattern(element){
    element.style.background = '#19172e';
    element.style.boxShadow = `0 0 2px #ffffff`;
}


function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}