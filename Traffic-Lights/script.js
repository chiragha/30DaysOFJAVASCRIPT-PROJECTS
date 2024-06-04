var arr = ["Red", "Yellow", "Green"];
var i =0;

function trafficLight(){
     var trafficLights =  document.getElementsByClassName("light");
     for (var j=0; j<trafficLights.length; j++){
        trafficLights[j].style.background = "white";
     }
     trafficLights[i].style.background = arr[i];
     if(i<trafficLights.length){
        i++
     }
     if(i==3){
        i=0;
     }
}
setInterval(trafficLight, 1000);
