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
	context.drawImage(video, 0, 0, 200,150);
   
});

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

