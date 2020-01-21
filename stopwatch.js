const startButton = document.querySelector('[data-action="Start"]');

const stopButton = document.querySelector('[data-action="Stop"]');

const resetButton = document.querySelector('[data-action="Reset"]');

let minutes = document.querySelector('.minutes');

let seconds = document.querySelector('.seconds');

let sec = 1;

let isRunning = false;

let interval;

function StartTimer() {
	
	if(isRunning==0)
	{
       
      interval = setInterval(StartClock,1000);

       isRunning = true;

    }

    else
	   return;

}

function StopTimer() {
	if(!isRunning== 0){
	
	clearInterval(interval);
    isRunning = false;

    }
}

function ResetTimer() {
	StopTimer();
	sec = 1;
	minutes.innerText = '00';
	seconds.innerText = '00';

}

function StartClock(){
    
   const noOfMinutes = Math.floor(sec/60);
   const noOfSeconds = sec%60;
    
   seconds.innerText = pad(noOfSeconds);
   minutes.innerText = pad(noOfMinutes);
	
	sec++;

}

function pad(number) {

	if(number<10)
		return '0' + number;
	else
		return number;
}


startButton.addEventListener('click', StartTimer);
stopButton.addEventListener('click', StopTimer);
resetButton.addEventListener('click', ResetTimer);