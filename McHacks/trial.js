window.onload = function displayList(){
  let entries = JSON.parse(localStorage.getItem('saved-sticker'))
   let html ='';
   var num = 0;
   for(i=0;i<9;i++){
     const src = "/images/"+num;
      html += '<tr><td><img src="'+src+'.png" width="80px"/></td></tr>'
      num += 1;
   }
  document.getElementById("guestview").innerHTML= html
 }

//  hello guys, how are you. I am good annd you? I'm fine thank you. *+-(._.)-+*