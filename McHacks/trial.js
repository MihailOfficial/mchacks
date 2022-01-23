window.onload = function displayList() {

  const prompt =[
    "drink a liquid",
    "find something yellow",
    "jump!",
    "make a heart",
    "draw a cat",
    "find a blue pen",
    "put on some lip balm",
    "get a snack",
    "find a book",
    "find the first letter of your name",
    "find a pet/plant"
];

  let entries = JSON.parse(localStorage.getItem("saved-sticker"));
  let html = "";
  var num = 0;
  for (i = 0; i < 9; i++) {
    const src = "/images/" + num;
    html +=
        '<div class="flip-card"><div class="flip-card-inner"><div class="polaroid"> <a href="#" title="'+ prompt[num] +'"><img src="' +
        src +
        '.png" class="memories" title="Santorini"/></a></div><div class="flip-card-back"><h1>John Doe</h1><p>Architect & Engineer</p><p>We love that guy</p></div></div></div>';

    num += 1;
  }
  document.getElementById("guestview").innerHTML = html;
};


    
 