

chrome.runtime.sendMessage({name: "fetch"}, (response) => {
    console.log(response);
    //Update Display on Content Script
    document.querySelector('h2').innerHTML=response.title;
    document.querySelector('p').innerHTML=response.text;
    document.getElementById('sticker').src=response.stickers;
    document.getElementById('graphic').src=response.images;
    document.body.style.backgroundColor=response.colors;
  
  });