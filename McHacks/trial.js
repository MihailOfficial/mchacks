window.onload = function displayList() {
  let entries = JSON.parse(localStorage.getItem("saved-sticker"));
  let html = "";
  var num = 0;
  for (i = 0; i < 9; i++) {
    const src = "/images/" + num;
    html +=
        '<div class="polaroid"> <a href="#" title="Santorini"><img src="' +
        src +
        '.png" class="memories" title="Santorini"/></a></div>';

    num += 1;
  }
  document.getElementById("guestview").innerHTML = html;
};