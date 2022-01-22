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