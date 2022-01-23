// Create countdown of 20 sec
// Start counting down
// Once done, remove the window.
// Reset the Popup HTML counter to 20:00.

let timerElement = document.getElementById('timer');
let time = 200;

function removeWindow(win) {
  targetWindow = win;
  chrome.windows.remove(targetWindow.id);
}

let setTime = function() {
  timerElement.innerHTML = time + ' sec';
  if (time === 0) {
    chrome.windows.getCurrent(removeWindow);
  }
  time--;
}

setTime();
let timerFunc = setInterval(setTime, 1000);

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
        anchor.click();
        window.setTimeout(() => {
            window.URL.revokeObjectURL(url);
             document.body.removeChild(anchor);
           }, 100);
        }, 'image/png')
});
var store = ["drink a liquid",
  "find something yellow",
  "jump!",
  "make a heart",
  "draw a cat",
  "find a blue pen",
  "put on some lip balm",
  "get a snack",
  "find a book",
  "find the first letter of your name",
  "find a pet/plant",
  "stretch",
  "put on hand cream",
  " draw your favorite food",
  "find something soft",
  "find something green",
  "draw a capybara",
  "make a paper plane",
  "show your outfit"];

document.getElementById("demo").innerHTML = store[Math.floor(Math.random() * 18)];
