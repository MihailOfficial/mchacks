window.onload = function displayList(){
  let entries = JSON.parse(localStorage.getItem('saved-sticker'))
   let html ='';
   for(i=0;i<entries.length;i++){
       let img = entries[i]
       console.log(img);
       let src=img.slice(51)
    html += '<tr><td><img src="'+src+'"class="sticker"/></td></tr>'
   }
  document.getElementById("guestview").innerHTML= html
 }