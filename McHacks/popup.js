var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');
var video = document.getElementById('video');

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.srcObject = stream;
        video.play();
    });
}

document.getElementById("snap").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 200, 150);
   
});

var image;
document.getElementById("down").addEventListener("click", function() {

    var blob = canvas.toBlob(function (blob) {
        var anchor = document.createElement('a');
        anchor.style.display = 'none';
        document.body.appendChild(anchor);
        var url = window.URL.createObjectURL(blob);
        anchor.href = url;
        anchor.download = 'capture.png';

        image = blob;
        // window.setTimeout(() => {
        //     window.URL.revokeObjectURL(url);
        //     document.body.removeChild(anchor);
        //   }, 100);
        // }, 'image/png')
});
});
document.getElementById("gall").addEventListener("click", function() {
        //var image 
        
        let entries = []
        
        entries.push(image)
        console.log(entries)
        localStorage.setItem('saved-sticker',JSON.stringify(entries))

});
// function addSticker() {
    
//     let entries = []
//     let sticker =  document.getElementById("sticker").src; 
//     localStorage.setItem('saved-sticker',JSON.stringify(entries))
  

//   if(localStorage.getItem('saved-sticker')){
//   	entries = JSON.parse(localStorage.getItem('saved-sticker')) 
//     entries.push(sticker)
//     localStorage.setItem('saved-sticker',JSON.stringify(entries))
//    }else{
//     entries.push(sticker)
//     localStorage.setItem('saved-sticker',JSON.stringify([sticker]))
//    }

// }

let counterElement = document.getElementById('counter');
let switchButton = document.getElementById('switch');
let switchClasses = switchButton.classList;
let countdownInterval;
let count;

let secToMin = function(timeInSec) {
  let sec = timeInSec%60;
  let min = (timeInSec-sec)/60;
  if (sec < 10) {
    sec = '0' + sec;
  }
  return min + ':' + sec;
}

// This will get the next alarm time from storage,
// calculate that time minus the current time,
// convert to seconds, then set the popup to that time.
let updateCountdown = function() {
  chrome.storage.local.get('nextAlarmTime', function(data) {
    // This sort of prevents the race condition by choosing between
    // 0 and the actual count. We basically want to prevent the popup
    // from ever displaying a negative number.
    count = Math.max(0, Math.ceil((data.nextAlarmTime - Date.now())/1000));
    counterElement.innerHTML = secToMin(count);
  });
};

// Check if isPaused. If not,
// Call the update countdown function immediately
// Then update the countdown every 0.1s
chrome.storage.local.get('isPaused', function(data) {
  if (!data.isPaused) {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 100);
    isNotPausedDisplay();
  } else {
    chrome.storage.local.get('pausedCount', function(data) {
      counterElement.innerHTML = secToMin(data.pausedCount);
    });
    isPausedDisplay();
  }
});

let isNotPausedDisplay = function() {
  switchClasses.add('is-not-paused');
  switchClasses.remove('is-paused');
  switchButton.innerHTML = 'Pause';
};

let isPausedDisplay = function() {
  switchClasses.add('is-paused');
  switchClasses.remove('is-not-paused');
  switchButton.innerHTML = 'Resume';
};

// If the switch is set on, continue counting down.
// If the switch is set to off, clear the existing alarm.
switchButton.onclick = function() {
  if (!switchClasses.contains('is-not-paused')) {
    // If isPaused = false, create the new alarm here.
    isNotPausedDisplay();
    chrome.storage.local.set({ isPaused: false });
    chrome.storage.local.get(['pausedCount','countdownMaxInMin'], function(data) {
      clearAndCreateAlarm(data.pausedCount/60, data.countdownMaxInMin);
    });
    countdownInterval = setInterval(updateCountdown, 100);
  } else {
    // If isPaused = true, store the existing count to pass back to
    // background.js, clear the existing alarm by using the date
    // in storage.
    isPausedDisplay();
    chrome.storage.local.set({
      isPaused: true,
      pausedCount: count
    });
    clearInterval(countdownInterval);
    clearAlarm();
  }
}
