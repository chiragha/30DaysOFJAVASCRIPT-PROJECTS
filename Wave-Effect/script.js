const container = document.getElementById("container");
const randomWaves = document.getElementById("randomWaves");

const circleArray =[];


let cols =15;
let rows = 15;


for(i=0; i<cols; i++){
  circleArray[i] =[];
   for(j=0; j<rows; j++){
     const circle = document.createElement("div");
     circle.classList.add('circle');
     container.appendChild(circle);
     circleArray[i].push(circle);
   }
}


circleArray.forEach((cols, i) =>{
    cols.forEach((circle, j) =>{
        circle.addEventListener('click', () =>{
               growCircles(i,j);
        });
});
});


function growCircles(i,j){
    if( circleArray[i] && circleArray[i][j] && !circleArray[i][j].classList.contains('grow')){
        circleArray[i][j].classList.add('grow');
        setTimeout(() =>{
            growCircles(i-1, j);
            growCircles(i+1, j);
            growCircles(i, j-1);
            growCircles(i, j+1);
        },100);


        setTimeout(()=>{
            circleArray[i][j].classList.remove('grow');
        }, 300);
    }
}


function makeRandomWaves(){
    const randomCoords =[Math.floor(Math.random() * cols), Math.floor(Math.random() * cols)];
     growCircles(randomCoords[0], randomCoords[1]);
}


randomWaves.addEventListener('click', makeRandomWaves);