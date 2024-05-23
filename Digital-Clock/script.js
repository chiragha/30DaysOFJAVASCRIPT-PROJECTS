var hour = document.getElementById("hrs");
var mins = document.getElementById("mins");
var sec = document.getElementById("sec");


setInterval(() => {
	var currentDate = new Date();
	
	hour.innerHTML = (currentDate.getHours()<10 ? "0" : "") +currentDate.getHours();
mins.innerHTML = (currentDate.getMinutes()<10 ? "0" : "") +currentDate.getMinutes();
sec.innerHTML = (currentDate.getSeconds()<10 ? "0" : "") +currentDate.getSeconds();
}, 1000);

