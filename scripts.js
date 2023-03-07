window.addEventListener('load',()=>{
    // Define variables
    var startTime, currentTime, remainingTime, timerInterval, coloin;
  
    // Function to start the timer
    function startTimer(duration) {
        startTime = Date.now();
        remainingTime = duration * 60 * 1000;
        timerInterval = setInterval(updateTimer, 1000);
        coloin=setInterval(changeColor, 7000);
        s.setAttribute('class','hide');
    }
  
    // Function to pause the timer
    function pauseTimer() {
        clearInterval(timerInterval);
        clearInterval(coloin);
        remainingTime -= Date.now() - currentTime;
        resumeBtn.removeAttribute('class','hide');
    }
  
    // Function to reset the timer
    function resetTimer() {
        clearInterval(timerInterval);
        clearInterval(coloin);
        remainingTime = 0;
        document.querySelector('.min').innerText = "25:00";
        s.innerText="Start";
        s.removeAttribute('class','hide');
        resumeBtn.setAttribute('class','hide');
    }
  
    // Function to update the timer display
    function updateTimerDisplay() {
        const minutes = Math.ceil(remainingTime / 1000 / 60);
        const seconds = Math.ceil((remainingTime / 1000) % 60);
        if(minutes==0 && seconds==0){
            document.querySelector('.min').innerText = "0:0";
        }else{
            document.querySelector('.min').innerText = minutes+":"+seconds;
        }
    }
  
    // Function to update the timer every second
    function updateTimer() {
        currentTime = Date.now();
        remainingTime -= currentTime - startTime;
        startTime = currentTime;
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
        }
        updateTimerDisplay();
    }
  
    // Add event listeners to buttons
    const s=document.querySelector('#btn');
    s.addEventListener('click', () => startTimer(25));
    const p=document.querySelector('#pause');
    p.addEventListener('click', pauseTimer);
    const r=document.querySelector('#reset');
    r.addEventListener('click', resetTimer);
  
    // Resume timer when "Resume" button is clicked
    const resumeBtn = document.querySelector('#resume');
    resumeBtn.setAttribute('class','hide');
    resumeBtn.addEventListener('click', () => {
        startTimer(remainingTime / 60 / 1000); // resume timer with remaining time
        resumeBtn.setAttribute('class','hide');
    });
    
    // setInterval(changeColor, 7000);
    let colors = ["green", "blue","white","yellow","gray","beige"]; // array of colors
    let index = 0; // index of the current color

    function changeColor() {
    document.body.style.backgroundColor = colors[index]; // set background color
    index = (index + 1) % colors.length; // increment index and wrap around
    }
  });
  