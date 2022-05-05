const startTimerValue = document.getElementById('timer');

timerID = setInterval(function() {
	--startTimerValue.textContent;

	if(startTimerValue.textContent == 0) {
		clearInterval(timerID);
		alert('Вы победили в конкурсе!');
	}
}, 1000);