
let elapsedTime = 0; 
let intervalID = null;
let sastifaction = true;


//catch craving and scratch every second

// Function to start the stopwatch
function startStopwatch() {
    elapsedTime = 0; 
    intervalID = setInterval(() => {
        elapsedTime++; 
    }, 1000); 
}

// Function to stop the stopwatch
function stopStopwatch() {
    clearInterval(intervalID); 
    elapsedTime = 0; 
}

//Craving trigger
function Craving() {
if (sastifaction = false) { 
    startStopwatch(); 
    //craving message 
    document.getElementById("textOverlay").style.display = "block";
    //if () {
    stopStopwatch(); 
    //thank you message 
    document.getElementById("textOverlay").style.display = "block";
    //disappear in 5 minutes
    //else 
    scrath()
  
    }
}

/*
//scratch trigger 
function scracth() { 
    if (elapsedTime.equals(15)){
        document.getElementById(scratch)
        if //action button is pressed and is vaild)
        //remove scratch
    }
}
*/