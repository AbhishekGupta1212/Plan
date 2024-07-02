let timer=document.getElementById("timer");
let start=document.getElementById("btn-start");
let stop=document.getElementById("btn-stop");
let reset=document.getElementById("btn-reset");
let timeCount=0;
let counter;

function display(){
    const minutes = Math.floor(timeCount / 60);
    const seconds = timeCount % 60;
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    timer.textContent = `${displayMinutes}:${displaySeconds}`;
}
function runTimer(){
counter=setInterval(()=>{
timeCount++
   display()
    },1000)
}

function stopTimer(){
    clearInterval(counter)
}

function resetTimer(){
    clearInterval(counter)
    timeCount=0;
    display()
    timer.innerText="00:00"
}



start.addEventListener("click",runTimer)
stop.addEventListener("click",stopTimer)
reset.addEventListener("click",resetTimer)