window.onload = function displayList() {
  const prompt = [
    "drink a liquid",
    "draw a cat",
    "show a book",
    "show your pet",
    "show something soft",
    "get a snack",
    "show a plant",
    "smile!",
    "show off your outfit",
    "stretch",
    "get the first letter of your name",
    "get a fruit",
    "get a coloured pencil",
    "draw a heart",
    "show your pet",
    "jump!",
    "put on some hand cream",
    "make a paper airplane",
  ];

  let entries = JSON.parse(localStorage.getItem("saved-sticker"));
  let html = "";
  var num = 0;
  for (i = 0; i < 18; i++) {
    const src = "/images/" + num;
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    html +=
      '<div class="flip-card" style="margin-top: ' + plusOrMinus*Math.floor(Math.random() * 20) + 'px; transform: rotate(' + plusOrMinus*Math.floor(Math.random() * 4) + 'deg);"><div class="flip-card-inner"><div class="polaroid"> <a href="#" title= "22/01/22"><img src="' +
      src +
      '.jpg" class="memories" title="Santorini"/></a></div><div class="flip-card-back"><h2>" ' +
      prompt[num] +
      ' "</h2></div></div></div>';

    num += 1;
  }
  document.getElementById("guestview").innerHTML = html;
};
