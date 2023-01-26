 // CLOCK

setInterval(showTime,1000);
	function showCustomDayAndMonth(){
		let dateObj = new Date();
		let Days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		let Months = ["January","Febraury","March","April","May","June","July","August","September","October","November","December"];
		let day = dateObj.getDay();
		let month = dateObj.getMonth();
		let year = dateObj.getFullYear();
		let date = dateObj.getDate();
		// Thursday, 29 January 2022
		let customDayMonth = Days[day] + ", " + date + " " + Months[month] + " " + year;
		document.getElementById("date").innerHTML = customDayMonth;
	}

	function showTime(){
		let time = new Date();
		let hour = time.getHours();
		let min = time.getMinutes();
		let sec = time.getSeconds();
		session = "AM";
	

	if (hour > 12){
		hour -=12;
		session = "PM";
	}
	if(hour ==0){
		hr = 12;
		session = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":" + min + ":" + sec + " " + session;

	document.getElementById("clock").innerHTML = currentTime;
	}

	showCustomDayAndMonth();


// CLOCK ENDS



// NIGHT AND LIGHT MODE

const icon = document.getElementById("icon");
icon.onclick = function() {
	document.body.classList.toggle("light-mode");
	if (document.body.classList.contains("light-mode")){
		icon.src = "images/moon.png";
	} else{
		icon.src = "images/sun.png";
		icon.style.backgroundColor ="black;"
	}
}